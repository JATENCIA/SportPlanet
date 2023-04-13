const express = require("express");
const router = express.Router();

var nodemailer = require("nodemailer");

const PaymentService = require("../services/paymentService");
const PaymentController = require("../Controllers/paymentController");
const PaymentInstance = new PaymentController(new PaymentService());

router.post("/", (req, res, next) => {
  PaymentInstance.getPaymentLink(req, res);
});

// router.get("/success", async (req, res) => {
//   try {
//     const infoMercadoPago = req.query;
//     let eMail = infoMercadoPago.external_reference;
//     const users = await Users.findOne({ eMail });
//     let id = users.billing[users.billing.length - 1];
//     const billing = await Billing.find({ _id: id });
//     const car = await Cars.find({ _id: billing[0].car });

//     if (infoMercadoPago.status === "approved") {
//       let payment_status = infoMercadoPago.status;
//       await Billing.updateOne({ _id: id }, { $set: { payment_status } });

//       let transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         auth: {
//           user: process.env.USSER,
//           pass: process.env.PASS,
//         },
//       });

//       transporter.sendMail(
//         {
//           from: '"RentCar" <info.grupo.rentcar@gmail.com>',
//           to: "willjusi@gmail.com",
//           subject: "Successful reservation !!!",
//           text: `Dear user: ${users.name} Your reservation was scheduled
//             \n Reservation data:
//             \nCar ${car[0].line} ${car[0].licensePlate} from the day ${billing[0].rentalDate} until the day ${billing[0].deadline} for a price  per day of $ ${car[0].price} accessories purchased ${billing[0].accessories.length} discount was $ ${billing[0].discount} total paid $ ${billing[0].full_value} \n In case of any queries, contact <info.grupo.rentcar@gmail.com>
//             \n Thank you for choosing us

//           `,
//         },
//         (error, info) => {
//           if (error) {
//             res.status(500).send(`no se pudo enviar ${error}`);
//           } else {
//             res.status(200).send(`Mail enviado ${info.value}`);
//           }
//         }
//       );

//       try {
//         res.status(200).redirect(`${process.env.API_URL_BACK}/payment/success`);
//       } catch (error) {
//         res.status(400).send(`Error ${error}`);
//       }
//     } else return res.redirect(`http://localhost:5173/shopping`);
//   } catch (error) {
//     res.status(500).send({ mensage: `${error}` });
//   }
// });

module.exports = router;
