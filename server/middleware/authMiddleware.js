const jwt = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {
    try{
  const token = req.headers.token;
  console.log(token);
  if (!token) res.status(401).json({msg : "not authorized"});
  else {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verifyToken);
    req.personId=verifyToken.id
    next()
  }
}
catch(error){res.status(500).json({msg:"sth went wrong"})}
}

module.exports=authMiddleware