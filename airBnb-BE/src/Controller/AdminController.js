import {Category} from "../model/Category.js";
import {Resort} from "../model/Resort.js";
import dotenv from "dotenv";
dotenv.config();


export async function addCategory(req, res){
    try{
        const category= new Category(req.body);
        await category.save();
        res.status(201).send(category);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};

export async function addResort(req, res){
    try{
        const {resort_name, price_per_night, availability} = req.body;
        const resort= new Resort({resort_name, price_per_night, availability});
        await resort.save();

        const {category_id} = req.body
        await Category.findByIdAndUpdate(
            category_id,
            { $push: { resorts: resort._id } },
            { new: true, useFindAndModify: false }
          );


        res.status(201).send(resort);
    } catch(error){
        res.status(400).json({message:error.message});
    }
}

export async function getAllCat(req, res){
    
    try{
        const results = await Category.find().populate("resorts")
        console.log(1)
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
