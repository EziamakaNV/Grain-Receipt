# Grain-Receipt
### `Introduction`
This collection contains the endpoints required to power Grain-Receipt. It handles all actions from creating a collateral, viewing all collaterals, booking a loan and verifying the loan

## `Usage Or Flow`

The postman collection has been published and can be tested at:
- [Postman Collection](https://documenter.getpostman.com/view/5211679/VUxKSp2w)

1.) `Create a collateral` : Create a collateral Id by using the Post a Collateral endpoint. An important property in the response body is the collateralId that's returned

2.) `View created collateral`: View the just created collateral using the Get Individual Collateral endpoint by providing the collateralId received in the Post a Collateral endpoint.

3.) `Book Loan`: Book a loan via the Book a Loan endpoint. The loanId and loanValue is returned

4.) `Confirm Loan Booking`: Confirm a loan booking through the Confirm Loan Bookin endpoint. An OTP is sent to the owner of the collateral after this

5.) `Verify Loan Booking`: Verify the loan booking by providing the OTP sent to the collateral owner's phone number. This is done via the Verify Loan disbursement OTP endpoint


## `FSI Sandbox APIs Used`
1. Africas Talking Send SMS
2. Sterling Bank Name Enquiry
3. Sterling Bank Interbank Transfer