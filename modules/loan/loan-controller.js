const collateralData = require('../../data/collateral');
const loanData = require('../../data/loan');
const Fsi = require('../../fsi-api-jdk/index');

const AfricasTalking = Fsi(process.env.SANBOX_KEY, 'AfricasTalking');
const SterlingBank = Fsi(process.env.SANBOX_KEY, 'SterlingBank');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

module.exports = {
    bookLoan(req, res){ 
        const {collateralId, interestRate, tenure, requestingBank} = req.body;

        const loanValue = 0.8 * collateralData[collateralId].cropValue;

        const loanId = loanData.push({collateralId, loanValue, requestingBank, disbursed: false}) - 1;


        res.status(200).json({loanValue, loanId});
    },

    confirmLoan(req, res){ // generate and send otp to farmers number
        const loanId = req.params.id
        
        const loan = loanData[loanId];
        const collateral = collateralData[loan.collateralId];
        const farmerPhoneNumber = collateral.farmerPhoneNumber;

        const OTP = getRndInteger(100000, 999999);

        const body = {
            username : "sandbox",
            to : farmerPhoneNumber,
            message: `OTP to confirm loan booking ${OTP}`
        };
        const header = {"Content-type" : "application/json"}
        AfricasTalking.sendSms(body, header)
        .then((data)=>{
            loan.OTP = OTP;
            console.log(loanData[loanId].OTP);
            res.status(200).json({
                collateralData: collateralData[loan.collateralId],
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error});
        });
    },

    getSingleLoan(req, res){
        const loanId = req.params.id;
        const loan = loanData[loanId];
        res.status(200).json({loan});
    },

    verifyOTP(req, res){
        const loanId = req.params.id;
        const loan = loanData[loanId];
        const collateral = collateralData[loan.collateralId];

        const { OTP } = req.body;

        if(loan.OTP === OTP){
            // carry out transfer
            collateral.ownedByBank = true;
            collateral.bankOwnerId = loan.requestingBank;
            loan.disbursed = true;

            /////// Name Enquiry
            let accountName = '';
            const nameEnquiryBody = {
                Referenceid: '01',
                RequestType: '01',
                Translocation: '01',
                ToAccount: '12345678',
                destinationbankcode: '0001',
            };
            const nameEnquiryHeader = {
                "Ocp-Apim-Subscription-Key": 't',
                "Ocp-Apim-Trace": true,
                ipval: 0,
                Appid: 69,
                "sandbox-key": process.env.SANBOX_KEY,
                "Content-Type": "application/json"
            };

            SterlingBank.interbankNameEnquiry(nameEnquiryBody, nameEnquiryHeader)
            .then(data => {
                console.log('Name Enquiry >>>>>>>>>>>>>');
                console.log(data);
                // Carry our transfer
                accountName = data.data.AccountNumber;

                const interBankTransferBody = {
                    "Referenceid": "0101",
                    "RequestType": "01",
                    "Translocation": "0101",
                    "SessionID": "01",
                    "FromAccount": "2030203020",
                    "ToAccount": "01",
                    "Amount": "65",
                    "DestinationBankCode": "420",
                    "NEResponse": "01",
                    "BenefiName": "01",
                    "PaymentReference": "01",
                    "OriginatorAccountName": "01",
                    "translocation": "01"
                };
                const interBankTransferHeader = {
                    "Ocp-Apim-Subscription-Key": 't',
                    "Ocp-Apim-Trace": true,
                    ipval: 0,
                    Appid: 69,
                    "sandbox-key": process.env.SANBOX_KEY,
                    "Content-Type": "application/json"
                };

                SterlingBank.interbankTransfer(interBankTransferBody, interBankTransferHeader)
                .then(data => {
                    console.log('Interbank Transer >>>>>>>>>>>>>');
                    console.log(data);
                    res.status(200).json({
                        disbursedTo: accountName,
                        loan
                    });
                })
                .catch(error => {
                    res.status(400).json({error});
                });
            })
            .catch(error => {
                console.log(error);
                res.status(400).json({error});
            });

        } else {
            res.status(400).json({error: "Wrong OTP"});
        }

        
    }
};