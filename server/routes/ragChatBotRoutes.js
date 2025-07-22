import express from 'express';
import ragQueryCall from '../controllers/ragChatBotController.js';

const router = express.Router();

router.post('/query', ragQueryCall);

export default router; 