const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
// require MongoDB, Express, and Cors
connectToMongo(); // connect to MongoDB 
const app = express() // create an instance of Express
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth')) //defines a route /api/auth and delegates the handling of requests to the auth route module
app.use('/api/notes', require('./routes/notes')) //defines a route /api/notes and delegates the handling of requests to the notes route module,


app.listen(port, () => { // starts the application
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})