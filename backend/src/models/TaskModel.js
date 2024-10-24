import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    description: { type: String},
    dayOfWeek: { type: String, required: true },
    startHour: { type: Number, required: true },
    endHour: { type: Number, required: true },
    completed: { type: Boolean, default: false}
}, { versionKey: false });

const task = mongoose.model('tasks', taskSchema);

export {task, taskSchema};