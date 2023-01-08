import jwt from 'jsonwebtoken';
import User from '../models/user'

const likes_Comments = async (req, res, next) => {
  try {
    const userToken= process.env.TOKEN_SECRET;
    const AuthToken=process.env.AUTH
    const bearerToken = req.header("Authorization");
    if (!bearerToken) {
     return res.status(401).json({ Message: 'login first please' });
    } else {
      const token = bearerToken.split(" ")[1];
      const authentication = jwt.verify(token, userToken);
      const userEmail = authentication.email;
      const userName = authentication.name;
      const exists = await User.findOne({ email: userEmail });
      if (!exists) {
       return res.status(401).json({ message: "login first please" });
      } else {
        res.locals.email = userEmail;
        res.locals.name = userName;
        next();
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
export default likes_Comments