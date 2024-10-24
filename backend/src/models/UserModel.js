import mongoose from "mongoose";
import { taskSchema } from "./TaskModel.js";

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, { versionKey: false });

const user = mongoose.model('users', userSchema);

export default user;