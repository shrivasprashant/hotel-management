import express from 'express';
import { allbooking, bookroom, singlebookingbyId } from '../controllers/bookingController.js';

const router = express.Router();

// Create a new booking
router.post('/', bookroom);

// Get all bookings
router.get('/', allbooking);

// Get a single booking by ID
router.get('/:id', singlebookingbyId);

export default router;
