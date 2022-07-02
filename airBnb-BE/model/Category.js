const mongoose= require ("mongoose")
const categorySchema= new mongoose.Schema({
    category_name:{
        type: String,
    },
    resorts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Resort'
    }]
})

module.exports= mongoose.model("Category", categorySchema)