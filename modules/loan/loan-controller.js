const collateralData = require('../../data/collateral');
const loanData = require('../../data/loan');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

module.exports = {
    bookLoan(req, res){ 
        const {collateralId, interestRate, tenure, requestingBank} = req.body;

        const loanValue = 0.8 * collateralData[collateralId].cropValue;

        const OTP = getRndInteger(100000, 999999);

        const loanId = loanData.push({collateralId, loanValue, requestingBank}) - 1;


        res.status(200).json({loanValue, loanId});
    },

    confirmLoan(req, res){ // generate and send otp to farmers number
        const loanId = req.params.id
        
        const loan = loanData[loanId];
        const collateral = collateralData[loan.collateralId];
        const farmerPhoneNumber = collateral.farmerPhoneNumber;

        
        res.status(200).json(collateralData[collateralId]);
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