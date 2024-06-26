import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config()

const app = express()

app.use(express.json())

//Routes
//auth
app.use('/auth', authRoutes)

//user
app.use('/users', userRoutes)

export default app