const Joi = require('joi');
const mongoose = require('mongoose');

const Rideoffer =  mongoose.model('Customer', new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
       type: Boolean,
       default: false 
    },
    phone:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
 }));

 function validateRideoffer(rideoffer) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    };
    return Joi.validate(rideoffer, schema);
}

exports.Customer = Rideoffer;
exports.validate = validateRideoffer;