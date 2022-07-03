import mongoose from "../Database/database.js"
const categorySchema= new mongoose.Schema({
    category_name:{
        type: String,
    },
    image: {
        type: String,
    },
    resorts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Resort'
    }]
})

export const Category = mongoose.model("Category", categorySchema)