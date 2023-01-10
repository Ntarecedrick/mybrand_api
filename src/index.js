import mongoose from 'mongoose';
import express from 'express';
import router from './routes/router';
import authRoutes from './routes/auth';
import "dotenv/config"
import swaggerUI from "swagger-ui-express"
import specs from './swagger';
import cors from "cors"

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(express.json({limit: '500mb'}));
app.use(cors({ origin: "*" }))
const Port= process.env.PORT || 4000
const AuthToken=process.env.AUTH
try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.URL, { useNewUrlParser: true }, ()=>{
        console.log("database running")
    });
    app.use("/", router)
    app.use('/', authRoutes)
    app.listen(Port, () => {
        console.log('server started')
    })    
} catch (error) {
    console.log(error)
}

export default app