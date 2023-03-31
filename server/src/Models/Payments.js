const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true
   },
  currency: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true 
  },
  payment_method: {
    type: String,
    required: true
  },
    user:[
    { type: mongoose.Types.ObjectId,
     ref: 'Users'}]
},{
  timestamps: true,
  versionKey: false,
});
module.exports = mongoose.model('Payments', paymentSchema);