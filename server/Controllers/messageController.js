const messageModel = require("../Models/messageModel");

// create message
const createMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const newMessage = new messageModel({
    chatId,
    senderId,
    text,
  });
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
};

// getMessages

const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const messages = await messageModel.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createMessage, getMessages };
