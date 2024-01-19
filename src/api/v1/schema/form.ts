import mongoose from "mongoose";
import fieldSchema from "./fieldSchema";
const formSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Signup", required: true},
    title: { type: String, required: true },
    apiKey: {type: String, required: true},
    fields: [fieldSchema],
    created_at: { type: Date, default: Date.now },
  },
  { strict: false }
);

const Form = mongoose.model("Form", formSchema);

export default Form;
