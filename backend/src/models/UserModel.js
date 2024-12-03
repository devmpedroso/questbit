import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    level: {type: Number, required: false, default: 1}, //level do user
    xpObtained: {type: Number, required: false, default: 0}, //xp obtido pelo user
    xpNeeded: {type: Number, riquered: false, default: 3} //xp necessário pelo user
}, { versionKey: false });

const user = mongoose.model('users', userSchema);

export {user, userSchema};