// models/Item.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    dateadded: { type: String, required: true }
}, { collection: 'users' });

export default mongoose.models.Item || mongoose.model('Users', userSchema);