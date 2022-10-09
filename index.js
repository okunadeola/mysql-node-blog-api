import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { db } from "./db.js";
import dotenv from 'dotenv'



const app = express();



dotenv.config();
app.use(cors({ origin: true, credentials: true}));
app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});
const PORT = process.env.PORT || 8800

app.listen(PORT, () => {
  console.log("Connected!");
});
