import { Router, Response, Request } from "express";
import FormSubmission from "../schema/FormSubmission";
import Form from "../schema/form";

const router = Router();

// Submit data to a form
router.post("/:apiKey", async (req: Request, res: Response) => {
  try {
    const apiKey = req.params.apiKey;

    // Find the form based on the provided API key
    const form = await Form.findOne({ apiKey });

    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }

    const formId = form._id;

    const data = req.body;
    const formSubmission = new FormSubmission({ formId, data });
    const savedSubmission = await formSubmission.save();
    return res.json(savedSubmission);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
router.get(
  "/:apiKey",
  async (req: Request, res: Response) => {
    try {
      const apiKey = req.params.apiKey;

      // Find the form based on the provided API key
      const form = await Form.findOne({ apiKey });

      if (!form) {
        return res.status(404).json({ error: "Form not found" });
      }

      const formId = form._id;

      // Retrieve all submissions for the specific form
      const submissions = await FormSubmission.find({ formId });

      return res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
);

export default router;
