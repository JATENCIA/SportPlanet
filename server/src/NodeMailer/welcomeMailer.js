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

const eMail = async (user) => {
  let mensaHTM = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        p, a, h1, h2, h3, h4, h5 {font-family: 'Noto Sans KR', sans-serif !important;}
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
        <h2> ${user.name} Welcome to SportPlanet</h2>
        <p>We are a Marketplace oriented to the purchase and sale of sporting goods.</p>
        <p>Thank you for registering on our platform</p>
    ="margin-bottom: 10px; color:#08042B"><i>Sincerely:</i><br> SportPlanet </P>
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
    to: user.eMail, // list of receivers
    subject: " Notification", // Subject line
    text: "User created successfully ", // plain text body
    html: mensaHTM,
    attachments: [
      {
        filename: "RC1.jpg",
        path: "https://static.vecteezy.com/system/resources/previews/013/441/985/original/world-map-on-the-foot-ball-silhouette-for-icon-symbol-pictogram-sport-news-art-illustration-apps-website-or-graphic-design-element-format-png.png",
        cid: "RC1",
      },
    ],
  };

  const info = await transporter.sendMail(mensaje);

  console.log(info);
};
module.exports = { eMail };
