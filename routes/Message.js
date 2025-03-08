import express from "express";
import Message from "../models/message.model.js";
import { verifyTokenAndAdmin } from "./verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
    const newMessage = new Message(req.body);

    try {
        const savedMessage = await newMessage.save();

        res.status(200).json(savedMessage);
    } catch(err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedMessage = await Message.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
        );

        res.status(200).json(updatedMessage);
    } catch(err) {
        res.status(500).json(err);
    }
});

//GET MESSAGE
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);

        res.status(200).json(message);
    } catch(err) {
        res.status(500).json(err);
    }
});

//GET MESSAGES
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const messages = await Message.find();

        res.status(200).json(messages);
    } catch(err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const message = await Message.findByIdAndDelete(req.params.id);
        res.status(200).json("The product has been deleted..");
    } catch(err) {
        res.status(500).json(err);
    }
});


export default router