import express from "express";
import  bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
import  mongoose from "mongoose";
import path from 'path';
import { fileURLToPath } from 'url'; // Import these functions
import { dirname } from 'path'; // Import dirname


import cors from "cors";
import userRoute from "./route/user.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
app.use(express.json());

app.use(cors()); 
app.use(express.static(path.join(__dirname, 'build')));


// MongoDB Connection
mongoose.connect('mongodb+srv://shivamyadav2113128:A8qRgZewSEBhnS32@project2.5ktfhyd.mongodb.net/?retryWrites=true&w=majority&appName=project2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Registration Route

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// Middleware to protect routes
app.use("/user", userRoute);

let port = process.env.PORT || 5003;

app.listen(port, () => console.log(`Server running on port ${port}`));
