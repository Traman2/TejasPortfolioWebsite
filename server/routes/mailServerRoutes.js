import { Router } from 'express';
import {
    getMailStatus,
    sendMailHandler
} from '../controllers/mailServerController.js';

import {
    sendClickMailHandler,
    getViewsHandler
} from '../controllers/clickRecordController.js';

const router = Router();

router.get("/", getMailStatus);
router.post("/form", sendMailHandler);
router.post("/click", sendClickMailHandler);
router.get("/views", getViewsHandler);

export default router;