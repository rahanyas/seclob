import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import connectDb from './config/db.config.js';
import AuthRoutes from './Routes/user.Routes.js';
const app = express();
const port = process.env.PORT || 9000;


connectDb()

app.use(express.json())
app.use('/', AuthRoutes);
app.use(cors({
  origin : ['http://localhost:9000'],
}))



app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
