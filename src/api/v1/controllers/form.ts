import {Router} from 'express'
import Forms from '../routers/Forms'

const app = Router()
app.use('/forms', Forms)

export default app;