import mongoose from "mongoose";
import { userSchema } from "./UserModel.js";

const taskSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    description: { type: String},
    dayOfWeek: { type: String, required: true },
    startHour: { type: String, required: true },
    endHour: { type: String, required: true },
    completed: { type: Boolean, default: false},
    user: userSchema
}, { versionKey: false });

const task = mongoose.model('tasks', taskSchema);

export default task;