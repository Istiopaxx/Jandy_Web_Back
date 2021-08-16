import express from "express";
import * as AuthHandler from "../middlewares/AuthHandler";
import * as ImageServices from "../services/ImageServices";

const Router = express.Router();

Router.post(
    "/upload",
    ImageServices.useMulter.single("files"),
    ImageServices.ProfileUpload
);

Router.post(
    "/upload/channel",
    ImageServices.useMulter.single("files"),
    ImageServices.ChannelUpload
)

export default Router;
