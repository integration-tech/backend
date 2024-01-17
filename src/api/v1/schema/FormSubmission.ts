import mongoose from "mongoose";

const formSubmissionSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form", required: true },
  data: { type: mongoose.Schema.Types.Mixed },
  submitted_at: { type: Date, default: Date.now },
});

const FormSubmission = mongoose.model("FormSubmission", formSubmissionSchema);

export default FormSubmission;
