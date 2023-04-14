const nodemailer = require("nodemailer");
const { USSER, PASS } = require("../config");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  //secure: true, // true for 465, false for other ports
  auth: {
    user: USSER, // generated ethereal user
    pass: PASS, // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("ready for send emails");
});

const eMailEnable = async (product) => {
  let mensaHTM = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        p, a, h1, h2, h3, h4, h5 {font-family: 'Roboto', sans-serif !important;}
        h1{font-size: 60px !important;}
        h2{font-size: 45px !important;}
        h3{font-size: 35px !important;}
        h4{font-size: 25px !important;}
        h5{font-size: 15px !important;}
        p, a{font-size: 15px !important;}
      </style>
    </head>
    <div style="width: 100%; background-color: #e3e3e3;">
      <div style="padding: 20px 10px 20px 10px;">
        <div style="background-color: rgb(4, 9, 82); padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
        <img src="cid:RC1" alt="" style="width: 200px; height: 80px; border: 2px solid rgb(8, 8, 8);">
        </div>
      </div>
      <div style="background-color: #e3e3e3; margin-top: 0px; padding: 20px 0px 5px 0px; text-align: center;">
        <h2 style="color:#120AF0">The product ${product.name} was enabled</h2>
        <p style="color:#408CF6">Dear ${product.user.name}, we are pleased to inform you that your product has been enabled and is now available on our platform. After reviewing your  case, our team has determined that your product complies with our terms and conditions.
        We apologize for any inconvenience that this situation may have caused, and we appreciate your patience and cooperation during this process.
        If you have any questions or concerns, please do not hesitate to contact our support team.
        Thank you for your understanding and for choosing our platform to offer your product.
        Best regards</p>
        
        <div style="display: flex; padding: 20px 10px 20px 10px; ">
          <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
            <img src="https://i.ibb.co/8s8Kwjc/Sports-Planet.jpg" alt="" style="width: 300px;" />
            <p >For inquiries or support you can contact us through our digital channels sportplanet.mp@gmail.com </p>
          </div>
        </div>
        <P style="margin-bottom: 10px;"><i>Sincerely:</i><br> SportPlanet </P>
        <a style="background-color: rgb(5, 23, 124); border: 2px solid rgb(8, 8, 8); color:#FFFFFF; padding: 16px 32px; text-align: center; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px; margin: 4px 2px;
        transition-duration: 0.4s; cursor: pointer;" href="https://sport-planet.vercel.app/">SportPlanet</a>
       
         
          <p style="background-color: black; padding: 10px 0px 10px 0px ; color:#FFFFFF; font-size: 12 !important;">
          @ 2023 SportPlanet, All rights reserved.</p>
        </div>
      </div>
    <div></div>
    </div>
    <body>
      
    </body>
    </html>
    `;
  let mensaje = {
    from: '"SportPlanet" <sportplanet.mp@gmail.com>', // sender address
    to: product.user.eMail, // list of receivers
    subject: " Notification", // Subject line
    text: "Product Enabled", // plain text body
    html: mensaHTM,
    attachments: [
      {
        filename: "RC1.jpg",
        path: "https://i.ibb.co/8s8Kwjc/Sports-Planet.jpg",
        cid: "RC1",
      },
    ],
  };

  const info = await transporter.sendMail(mensaje);

  console.log(info);
};
module.exports = { eMailEnable };
