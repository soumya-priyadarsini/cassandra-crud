const jwt = require('jsonwebtoken');

const jwtSecretKey = 'abcd';

exports.generateToken = async(data)=>{
    
    const payload = { id: data };
    //console.log(payload)
    const token = jwt.sign(payload, jwtSecretKey, {expiresIn: '10m'});
    //console.log(token)
    return token;
}

exports.validateToken = async(req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
  
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = jwt.verify(token, jwtSecretKey);
      //console.log(decoded)
      req.user = decoded.id;
        //console.log(req.user)
     next();
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
   

  };