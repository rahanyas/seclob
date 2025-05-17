import express from 'express';
const router = express.Router();

import { signIn } from '../controller/user.controller.js';

router.get('/', signIn);

export default router