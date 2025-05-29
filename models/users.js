// root/models/users.js

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        dateadded: { type: String, required: true }
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User