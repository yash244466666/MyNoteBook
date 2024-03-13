const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo(); 
const app = express() 
const port = 5000

app.use(cors())// to allow cross-origin requests
app.use(express.json())  // to recognize the incoming Request Object as a JSON Object.

app.use('/api/auth', require('./routes/auth')) // linking the routes
app.use('/api/notes', require('./routes/notes'))//  linking the routes


app.listen(port, () => { // starts the application
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})