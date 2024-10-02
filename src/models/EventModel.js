import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    description: { type: String, required: true },
    dayOfWeek: { type: String, required: true },
    startHour: { type: Number, required: true },
    endHour: { type: Number, required: true },
    completed: { type: Boolean, required: false }
}, { versionKey: false });

const event = mongoose.model('events', eventSchema);

export default event;