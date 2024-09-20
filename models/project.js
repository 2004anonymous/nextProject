import mongoose, {Schema} from "mongoose";

const projectSchema = new Schema(
    {
        title: {type: String, required : true},
        description: {type: String, required : true}
    }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;