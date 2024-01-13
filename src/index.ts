import express, {Request , Response} from 'express'
import SignIn from './api/v1/routers/SignIn'

const app = express()

const PORT = 8001;

app.get('/', (req: Request, res: Response)=>{
    res.status(200).json("Hello World !")
})

app.use('/register', SignIn)

app.listen(PORT,()=>{
    console.log(`Connected to PORT ${PORT}`)
})