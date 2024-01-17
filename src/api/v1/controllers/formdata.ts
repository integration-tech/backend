import {Router} from 'express'
import FormData from '../routers/FormData'

const app = Router()
app.use('/formdata', FormData)

export default app;