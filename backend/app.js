import express from "express";
import cors from "cors";
import { config } from "dotenv";

import {sendEmail} from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

//Middlewares
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Post Request
router.post("/send/mail", async (req, res, next) => {
    const {name, email, message } = req.body;
    console.log({name, email, message })
  
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
  
    try {
      await sendEmail({
        email: "venkateshmundra29@gmail.com", //message send to this email
        userEmail: email,                     // user's email
        subject: "GYM WEBSITE CONTACT",
        message,
      });
      res.status(200).json({ success: true, message: "Message Sent Successfully." });
    }
     catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  });
  

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening at port ${process.env.PORT}`);
});
