import express from 'express';
const router = express.Router();

import { signIn } from '../controller/user.controller.js';

router.post('/signin', signIn);

export default router