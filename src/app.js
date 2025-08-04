import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app=express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials:true
    })
)
//common middleware
 app.use(express.json({limit: "16kb"}))
 app.use(express.urlencoded({extended:true,limit:"16kb"}))
 	// •	express.urlencoded(...): This lets your server read the form data that people send (like username/password from a login form).
	// •	extended: true: This helps the server understand more complex data if needed (like lists or objects).
	// •	limit: "16kb": This is a safety rule—don’t accept too much data (just 16 kilobytes max), to protect the server.
app.use(express.static('public'))
// “Hey, if someone asks for a file (like an image, CSS file, or JavaScript file), look for it inside the public folder and give it to them.”it serves static files like images(.jpg,.png),css file(for styling),JSfiles(for frontend behavior),HTML files.
app.use(cookieParser());
//import routes
import healthcheckRouter from "./routes/healthcheck.routes.js"
import userRouter from './routes/user.routes.js'
import { errorHandler } from './middlewares/error.middlewares.js';

//routes
app.use("/api/v1/healthcheck",healthcheckRouter)
app.use("/ap1/v1/users",userRouter)

// app.use(errorHandler)
export { app } 