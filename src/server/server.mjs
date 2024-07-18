import express from "express";
import admin from "./firebaseAdmin.mjs";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";

// Загружаем переменные окружения из файла .env
config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/login", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await admin.auth().getUserByEmail(email);
    const token = await admin.auth().createCustomToken(user.uid);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
