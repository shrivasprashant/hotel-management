import express from 'express';
const router = express.Router();

import { Checkavailability, deleteRoom, fetchAllRooms, fetchMetrics, findRoomByRoomNumber, registerroom, updateRoomDetails, updateRoomStatus } from '../controllers/roomController.js';

// Create a new room
router.post('/rooms', registerroom);

// Check room availability
router.get('/rooms/availability', Checkavailability);

// Update room status
router.put('/rooms/:roomNumber/status', updateRoomStatus);

// Fetch all rooms
router.get('/rooms', fetchAllRooms);

// Fetch metrics
router.get('/metrics', fetchMetrics);

// Update room details
router.put('/rooms/:roomNumber', updateRoomDetails);

// Delete a room
router.delete('/rooms/:roomNumber', deleteRoom);

// Get a room  by ID
router.get('/rooms/:roomNumber', findRoomByRoomNumber);;

export default router;
