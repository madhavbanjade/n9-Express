// //Generate token
import jwt from "jsonwebtoken";

// let infoObj = {
//   id: "1234",
// };

// let secretKey = "n9solution";

// //expiry  and info must be in same format

// let expiryDate = {
//   expiresIn: "1d",
// };

// //Generate token :
// let token = jwt.sign(infoObj, secretKey, expiryDate);
// console.log(token);

// //Verify Token :

// let token1 =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE3MjA1MDUxODcsImV4cCI6MTcyMDU5MTU4N30.ZewWdpCrF5tmKRfbp89onPinx_ikh9U1HPEMYqWyP_4";
// try {
//   let infoObj = jwt.verify(token1, secretKey);
//   console.log(infoObj);
// } catch (error) {
//   console.log(error.message);
// }

let newObj = {
  id: "445",
};

let secretKey = "madhav122";

let expiryDate = {
  expiresIn: "10m",
};

let token = jwt.sign(newObj, secretKey, expiryDate);
console.log(token);

let newToken = token;
try {
  let _token = jwt.verify(newToken, secretKey);
  console.log(_token);
} catch (error) {
  console.log(error.message);
}
