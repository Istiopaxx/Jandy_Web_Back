import express from "express";
import * as ChannelServices from "../services/ChannelServices";
import * as AuthHandler from "../middlewares/AuthHandler";
const Router = express.Router();

Router.post("/",ChannelServices.CreateChannel);
Router.get("/:userId",ChannelServices.GetChannelList);
Router.get("/info/:channelId",ChannelServices.GetChannelInfo);
Router.patch("/", ChannelServices.UpdateChannel);
export default Router;