import express from "express";
import {  getAllUsers, login, logout, register } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";


const router = express.Router();

router.post("/register", register)
router.route("/login").post(login);
router.route("/logout").get(isAuthenticated, logout);
router.get('/all',  getAllUsers);




export default router; 