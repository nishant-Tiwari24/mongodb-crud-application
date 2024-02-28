import mongoose, {Schema} from "mongoose";

const topicSchema = new mongoose.Schema(
    {
        title : {
            type: String,
            required: true
        },
        description : {
            type: String
        },        
    },{timestamps: true})

export const Topic = new mongoose.Model('Topic',topicSchema);