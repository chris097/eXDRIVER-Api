const mongoose = require('mongoose');
const rideoffers = require('./router/rideoffers');
const customers = require('./router/customers');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/transporter')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/rideoffers', rideoffers);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));




/*
const Debug = require('debug')('app:startup');
const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const home = require('./dist/route/home')

ride.set('view engine', 'pug'); // express template 'PUG';
ride.set('views', './views');
ride.use(express.json());
ride.use(express.urlencoded({ extended: true})); // key=value&key=value
ride.use(express.static('public')); // static middleware: store css and image
ride.use(helmet()); // third-party middleware help secure your app by setting various Http headers
ride.use('/', home);

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail server: ' + config.get('mail.host'));
console.log('Mail password: ' + config.get('mail.password'));


if (router.get('env') === 'development') {
    ride.use(morgan('tiny')); // third-party middleware for Http request logger
    startupDebugger('Morgan enabled...')
} // if running development, testing or production Environment //now running on development Environment 

//Db work...
Debug('Connected to the database.......');



ride.use(logger); 
 */



