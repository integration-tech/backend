import {Router, Response, Request} from 'express'
import Signup from '../schema/Signup';
import { compareHashedPassword } from '../services/hashPassword';

const router = Router()

router.post('/',async(req:Request, res: Response)=>{
    // fetching credentials
    const {username, password} = req.body;
    if(!username || !password) return res.status(400).json({error:'Missing username or password'})
    try {
        // finding data in database
        let user = await Signup.findOne({username})
        if (!user) return res.status(404).json("User not found")
        // compare passwords - bcrypt
        const compare = compareHashedPassword(password, user.password)
        if (compare === true) {
            return res.status(200).json(user)
        }
        else{
            return res.status(400).json("Wrong Credentials !")
        }
    } catch (error) {
        console.log('Oops! Some error Occurs.',error)
    }
})

export default router;