const express = require('express');
const app = express();
const cors = require('cors')

//SETINGS:
app.set('port', process.env.PORT || 4000);

//MIDLEWARES funciones que se ejecutan antes de que lleguen a la url
app.use(cors());
app.use(express.json());

//ROUTES
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))


module.exports = app;