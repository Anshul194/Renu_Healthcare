import express from "express";
import {
subscribeToUpdates
  } from "../controllers/SubscriptionController.js";

const SubscribeRouter = express.Router();

SubscribeRouter.post("/subscribe", subscribeToUpdates);

export default SubscribeRouter;