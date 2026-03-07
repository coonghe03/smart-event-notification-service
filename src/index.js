// src/index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());

// Routes
app.use("/api/notifications", notificationRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "notification-service" });
});

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Notification Service running on port ${PORT}`);
  });
});
