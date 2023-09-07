import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use("/api/auth/", authRoutes);






app.listen(8800, () => console.log("Server Connected!"))