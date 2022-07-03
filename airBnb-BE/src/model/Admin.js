import mongoose from "../Database/database.js"
const adminSchema= new mongoose.Schema({
full_name: {
    type: String
},

email: {
    type: String,
    required: true,
},

password: {
    type: String,
    required: true
}, 

})

export const Admin = mongoose.model("Admin", adminSchema)