import { Router, Response, Request } from "express";
import generateApiKey from "../services/apiKey";
import Form from "../schema/form";
import { jwtAuthMiddleware } from "../middlewares/jwtAuthMiddleware";

const router = Router();

router.post("/", jwtAuthMiddleware , async (req: Request, res: Response) => {
  try {
    const { title, fields, userId } = req.body;
    // Generate API key for the form using title and current timestamp as data
    const apiKeyData = { title, timestamp: Date.now() };
    const apiKey = generateApiKey(apiKeyData, "my_secret_key");

    const form = new Form({ userId,title, apiKey, fields });
    const savedForm = await form.save();
    return res.json(savedForm);
  } catch (error) {
    return res.status(500).json({ error: "OOPS! Something Went Wrong!" });
  }
});

// Get form by ID
router.get("/",jwtAuthMiddleware, async (req: Request, res: Response) => {
  try {
    const {userId} = req.body;
    const forms = await Form.find({userId:userId});
    return res.json(forms);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

export default router;
