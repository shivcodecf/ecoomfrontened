import express from "express";
import  bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
import  mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./route/user.route.js";




const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors()); 
app.use(express.static('public')); // Serving static files from 'public' directory


// MongoDB Connection
mongoose.connect('mongodb+srv://shivamyadav2113128:A8qRgZewSEBhnS32@project2.5ktfhyd.mongodb.net/?retryWrites=true&w=majority&appName=project2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Registration Route


// Middleware to protect routes
app.use("/user", userRoute);

let port = process.env.PORT || 5003;

app.listen(port, () => console.log(`Server running on port ${port}`));
