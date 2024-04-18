import express, { json } from 'express'
import  connectDb  from './DB/index.js';
import cors from 'cors'
import dotenv from 'dotenv';
import morgan from 'morgan';

const app = express();


app.use(morgan("dev"))
app.use(json())
app.use(cors())
dotenv.config({
    path:'./.env'
})



// routes import


import applicationRouter from './routes.js'

app.use("/api/v1",applicationRouter)

connectDb().then(()=>{

    app.listen(3000,()=>{
        console.log('server is runing');
    })
}).catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
