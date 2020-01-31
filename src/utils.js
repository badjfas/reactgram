import dotenv from "dotenv"
dotenv.config({path:path.resolve(__dirname,".env")});
import path from "path"

import jwt from "jsonwebtoken";
import { nouns,adjectives } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`
}

console.log(process.env.SENDGRID_USERNAME,process.env.SENDGRID_PASSWORD)

 const sendMail = (email) => {
    const options = {
        auth:{
        api_user: process.env.SENDGRID_USERNAME,
        api_key: process.env.SENDGRID_PASSWORD
      }
    };
    const client = nodemailer.createTransport(sgTransport(options));

    return client.sendMail(email);
}
export const sendSecretMail = (address,secret) =>{
    const email={
        from: "bjw@reactgram.com",
        to: address,
        subject: "Login Secret for Reactgram😎",
        html: `Hello Your login secret is <strong>${secret}</strong>.<br/> Copy paste on the app to Log in `
    };
    return sendMail(email);
}

export const generateToken = (id) => jwt.sign({id},process.env.JWT_SECRET);