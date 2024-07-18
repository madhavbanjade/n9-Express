import nodemailer from "nodemailer";

// The main thing in this file is transportInfo and mailInfo.

let transportInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    //user and pass must be genuine.
    user: "madhavbanjade005@gmail.com",
    pass: "ngjc xpsh epeh krgy",
  },
};

export const sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transportInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};
