import mongoose from "../Database/database.js"
const resortSchema= new mongoose.Schema({
    resort_name:{
        type: String,
    },
    price_per_night: {
        type: String,
    },
    availability:{
        type: String,
    },
    categories:{
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }

})

export const Resort =  mongoose.model("Resort", resortSchema)