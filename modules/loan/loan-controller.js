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

        const loanId = loanData.push({collateralId, loanValue, requestingBank}) - 1;


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
            console.log(data);
            res.status(200).json({
                collateralData: collateralData[loan.collateralId],
                data
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error});
        });
    },

    getSingleLoan(req, res){
        const result = [];
        for(const collateralId in collateralData){
            result.push(collateralData[collateralId]);
        }
        console.log(result);
        res.status(200).json({result});
    }
};