import express from 'express';
import {
  createMessage,
  deleteMessage,
  getMessagesByConversation
} from '../controller/messege.controller.js';
import { protect } from '../Middleware/auth.middleware.js';

const router = express.Router();

router.post('/send/:id', protect, createMessage); // Corrected the endpoint to handle message sending
router.get('/get', getMessagesByConversation); // Changed to use query parameters

export default router;
