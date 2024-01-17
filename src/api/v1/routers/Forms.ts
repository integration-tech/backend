import { Router, Response, Request } from "express";
import generateApiKey from "../services/apiKey";
import Form from "../schema/form";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, fields } = req.body;

    // Generate API key for the form using title and current timestamp as data
    const apiKeyData = { title, timestamp: Date.now() };
    const apiKey = generateApiKey(apiKeyData, "my_secret_key");

    const form = new Form({ title, apiKey, fields });
    const savedForm = await form.save();
    return res.json(savedForm);
  } catch (error) {
    return res.status(500).json({ error: "OOPS! Something Went Wrong!" });
  }
});

// Get all forms
router.get("/", async (req: Request, res: Response) => {
  try {
    const forms = await Form.find();
    return res.json(forms);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

export default router;
