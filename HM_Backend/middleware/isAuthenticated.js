import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "User not authenticated." })
        };
        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!decode) {
            return res.status(401).json({ message: "Invalid token" });
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
};
export default isAuthenticated;



// import User from '../models/User.js';

// const isAuthenticated = async (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '') || req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: 'Authentication failed. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     const user = await User.findById(decoded.userId);

//     if (!user) {
//       return res.status(401).json({ message: 'Authentication failed. User not found.' });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// export default isAuthenticated;
