import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose';

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";


const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
      
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
