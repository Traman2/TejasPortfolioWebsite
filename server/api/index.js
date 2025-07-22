import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

//Route files
import mailRoutes from "../routes/mailServerRoutes.js";
import ragChatBotRoutes from "../routes/ragChatBotRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection failed", err));
  
app.use(express.json());
app.use("/", mailRoutes);
app.use("/rag", ragChatBotRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}...`);
});

export default app;
