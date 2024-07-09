import express from 'express'
import userRouter from './routes/userRoutes.js'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json());
app.use('/users', userRouter);
app.get('/', (req, res)=>{
    console.log("TEST");
    res.send("Hello from the server");
})
app.listen(8000, '127.0.0.1', ()=>{
    console.log("Server is running");
})
