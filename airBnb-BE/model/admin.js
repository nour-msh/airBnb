const mongoose= require ("mongoose")
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