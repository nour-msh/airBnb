const mongoose= require("mongoose");
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

module.exports= mongoose.model("Resort", resortSchema)