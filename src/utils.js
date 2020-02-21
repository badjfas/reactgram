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
        html: `안녕하세요 당신의 로그인 코드는 ${secret}</strong>입니다.<br/> 복사 붙여넣기 해주세요.`
    };
    return sendMail(email);
}

export const generateToken = (id) => jwt.sign({id},process.env.JWT_SECRET);