
import mongoose, { Schema } from "mongoose";

const dbzUserSchema = new Schema(
    {
        name: { type: String, required: true },
        planet: { type: String, required: true },
        spouse: { type: String, required: true }
    }
)

const DbzUser = mongoose.models.dbzUserSchema || mongoose.model("User", dbzUserSchema);

export default DbzUser