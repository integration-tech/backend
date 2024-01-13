import {Request, Router, Response} from 'express'

const router = Router()

router.get('/signin', (req:Request, res : Response)=>{
    res.status(200).json("You are Signed In !")
})

export default router;