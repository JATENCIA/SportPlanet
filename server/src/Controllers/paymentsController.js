const Payments = require("../Models/Payments");
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_PASSWORD);
const Users = require("../Models/Users");
/**
 * It's an async function that uses the mongoose model to find all the payments in the database and
 * returns them in a json format
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
const getPayments = async (req, res) => {
  try {
    const payment = await Payments.find({});
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }};
/**
 * It gets a payment from the database by its id
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user is being returned.
 */
const getPayment = async (req, res) => {
  const { id } = req.params;
  try {
    const payment = await Payments.findById(id);
    if (!payment) {
      res.status(204).end();
    } else {
      res.status(200).json(payment);
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}
/**
 * It creates a new payment in the database
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns a user object.
 */
const createPayment = async (req, res) => {
  try{
    const {amount, currency, description, payment_method, 
     user} = req.body;
    const userId = await Users.findById(user)
    

    const payment = new Payments({ 
      amount: amount, currency: 
      currency, description: description, 
       
      payment_method: payment_method, user: userId,
    })
    
    const charge = await stripe.paymentIntents.create({
      amount: amount,
       
      currency: currency, 
      description,
      payment_method: payment_method,
      confirm: true,
    })
    console.log(charge + "holaaa")
    const savePayment = await payment.save();
    userId.payment = userId.payment.concat(savePayment._id)
    userId.save()
    res.status(200).json(savePayment)
  }catch(error){
    res.status(500).json({message: error.message})
  }
}
module.exports = {
    getPayments,
    getPayment,
    createPayment,}