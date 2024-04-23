import mongoose from "mongoose";
import { validate } from "uuid";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: {
        type: String,
        validate:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        required: true,
    },
});

export default mongoose.model("User", UserSchema);
