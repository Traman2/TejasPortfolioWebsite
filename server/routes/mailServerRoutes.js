import { Router } from 'express';
import {
    getMailStatus,
    sendMailHandler
} from '../controllers/mailServerController.js';

const router = Router();

router.get("/", getMailStatus);
router.post("/", sendMailHandler);

export default router;