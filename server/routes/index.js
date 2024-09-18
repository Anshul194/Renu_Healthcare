import express from "express";
import userRouter from './userRoutes.js';
import SubscribeRouter from "./SubscriptionRoute.js";

const router = express.Router();
router.use('/user', userRouter);
router.use('/Subscription', SubscribeRouter);


export default router;
