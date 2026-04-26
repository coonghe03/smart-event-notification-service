// src/routes/notificationRoutes.js
import express from "express";
import protect from "../middleware/auth.js";
import {
  sendBookingConfirmation,
  sendEventReminder,
  getMyNotifications,
} from "../controllers/notificationController.js";

const router = express.Router();

// Protected routes (called by other services or authenticated users)
/**
 * @swagger
 * /api/notifications/booking-confirmation:
 *   post:
 *     summary: Send booking confirmation email
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               eventId:
 *                 type: string
 *               eventTitle:
 *                 type: string
 *               ticketCount:
 *                 type: number
 *               totalPrice:
 *                 type: number
 *               bookingId:
 *                 type: string
 *               userEmail:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email sent successfully
 */
router.post("/booking-confirmation", protect, sendBookingConfirmation);

/**
 * @swagger
 * /api/notifications/event-reminder:
 *   post:
 *     summary: Send event reminder email
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventId:
 *                 type: string
 *               eventTitle:
 *                 type: string
 *               eventDate:
 *                 type: string
 *               userEmail:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reminder sent successfully
 */
router.post("/event-reminder", protect, sendEventReminder);


/**
 * @swagger
 * /api/notifications/my-notifications:
 *   get:
 *     summary: Get logged-in user notifications
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of notifications
 */
router.get("/my-notifications", protect, getMyNotifications);

export default router;
