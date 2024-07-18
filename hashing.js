//Hashing
import bcrypt from "bcrypt";

// //Generate hash code:
// let Password = "Password@123";
// let hashedPassword = await bcrypt.hash(Password, 10);
// console.log(hashedPassword);

// //compare hash password :-
// let loginPassword = "Password@123";
// //let isvalidPassword = await bcrypt.compare(loginPassword, Password);
// let isvalidPassword = await bcrypt.compare(loginPassword, hashedPassword);
// console.log(isvalidPassword);

let security = "madhav334";
let hashingSecurity = await bcrypt.hash(security, 10);
console.log(hashingSecurity);

let newSecurity = security;
let newHashingSecurity = await bcrypt.compare(security, hashingSecurity);
console.log(newHashingSecurity);
