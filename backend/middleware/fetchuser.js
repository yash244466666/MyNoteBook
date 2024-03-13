var jwt = require('jsonwebtoken');
const JWT_SECRET = '5e5510n-5ecre7-key';
// Middleware function to fetch user details from JWT token
const fetchuser = (req, res, next) => {
    const token = req.header('auth-token'); //Extracting the token from the request headers
    if (!token) { // if token exists 
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET); // Verifying the token using the secret key
        req.user = data.user; //Extracting user data from the token and attaching it to the request object
        next(); // Calling the next middleware function
    } catch (error) { // if token does not exist
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser;