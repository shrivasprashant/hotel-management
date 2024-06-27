import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import logger from "morgan";
import ErrorHandler from "./utils/ErrorHandler.js";
import { generatedError } from "./middleware/error.js";

dotenv.config({});
const app = express();
const port = process.env.PORT || 5000;

// Logger
app.use(logger("tiny"));

// Network access
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,    
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create session
app.use(cookieParser());

// Routes handling
app.use("/users", userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/register', roomRoutes);

// Error handling
app.all("*", (req, res, next) => {
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404));
});
app.use(generatedError);

app.listen(port, () => {
    connectDatabase();
    console.log(`Server listening at port ${port}`);
});
