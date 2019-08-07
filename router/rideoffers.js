const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const { Rideoffer, validate} = require('../models/rideoffer');
const router = express.Router();

router.get('/', async (req, res) => {
    const rideoffers = await Rideoffer.find().sort('name');
    res.send(rideoffers);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let rideoffer =  new Rideoffer (
        { 
            name: req.body.name,
            isCustomer: req.body.isCustomer,
            phone: req.body.phone,
         });
    rideoffer = await rideoffer.save();
    res.send(rideoffer);
});

 router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
     const rideoffer = await Rideoffer.findByIdAndUpdate(req.params.id, 
        {
            name: req.body.name,
            isCustomer: req.body.isCustomer,
            phone: req.body.phone
        }, {
     new: true
});
if (!rideoffer) return res.status(404).send('The genre with the given ID...');
  res.send(rideoffer);
});

router.delete('/:id', async (req, res) => {
const rideoffer = await Rideoffer.findByIdAndRemove(req.params.id);

if (!rideoffer) return res.status(404).send('The genre with the given ID...');
  res.send(rideoffer);
});

 router.get('/:id', async (req, res) => {
     const rideoffer = await Rideoffer.findById(req.params.id);

     if (!rideoffer) return res.status(404).send('The genre with the given ID...');
     res.send(rideoffer);
 });

  module.exports = router;