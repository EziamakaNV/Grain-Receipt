const collateralData = require('../../data/collateral');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

module.exports = {
    bookCollateral(req, res){ // calculate price and save 
        const {quantity, cropType, condition,
            farmerPhoneNumber, farmerName, businessName,
            bankCode, accountNumber
        } = req.body;

        const date = new Date();
        let multiplier = 1;
        let collateralId = 0;

        if(condition === "great"){
            multiplier = 1.5
        } else if(condition === "okay"){
            multiplier = 1;
        }
        else{
            multiplier = 0.5
        }

        cropValue = quantity * multiplier;
        collateralId = getRndInteger(0,90001);

        collateralData[collateralId] = {
            farmerPhoneNumber,
            condition,
            cropValue,
            cropType,
            farmerPhoneNumber,
            ownedByBank: false,
            bankOwnerId: null,
            status : 'success',
            issuanceDate: date.toString(),
            quantity,
            farmerName,
            businessName,
            bankCode,
            accountNumber
        }

        res.status(200).json({
            collateralId,
            ...collateralData[collateralId]
        });
    },

    getSingleCollateral(req, res){
        const collateralId = req.params.id
        console.log(collateralId);
        res.status(200).json(collateralData[collateralId]);
    },

    getAllCollateral(req, res){
        const result = [];
        for(const collateralId in collateralData){
            result.push(collateralData[collateralId]);
        }
        console.log(result);
        res.status(200).json({result});
    }
};