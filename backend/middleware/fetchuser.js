var jwt = require('jsonwebtoken');//importing jwt
const JWT_SECRET = '5e5510n-5ecre7-key';      //secret key for jwt
const fetchuser = (req, res, next) => { //middleware function
    const token = req.header('auth-token');
    if (!token) { // if token is not found
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try { //if token is found
        const data = jwt.verify(token, JWT_SECRET); 
        req.user = data.user; 
        next(); 
    } catch (error) {  //if token is invalid
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser;