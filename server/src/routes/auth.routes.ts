import express from 'express';
import { getRegister } from '../controllers';
const router = express.Router();
// GET Register user
router.get('/register', getRegister);

export default router;
