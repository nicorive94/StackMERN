require('dotenv').config();
const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI;
// aca le digo que cree una db llamada mernstack en .env

mongoose.connect(URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
     });

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('DB is connected');
});