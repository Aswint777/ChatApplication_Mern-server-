const express = require("express");
const {
  landingPage,
  sampleData,
  singleChat,
  userSignUp,
  userLoginPost,
} = require("../Controller/chatController");
const { chats } = require("../Controller/data/data");

const router = express.Router();

router.get("/", landingPage);

router.get("/api", sampleData);

router.get("/api/:_id", singleChat);

router.post("/userSignUpPost", userSignUp);

router.post("/userLoginPost", userLoginPost);

module.exports = router;
