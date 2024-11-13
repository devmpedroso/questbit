import mongoose from "mongoose";
import { userSchema } from "./UserModel.js";

const eventSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    eventDate: { type: String, required: true },
    startHour: { type: String, required: true },
    endHour: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }
}, { versionKey: false });

const event = mongoose.model('events', eventSchema);

export default event;