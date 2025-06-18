import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//Route files
import mailRoutes from "../routes/mailServerRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ origin: "https://tejasraman.com" }));

app.use("/", mailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}...`);
});

export default app;
