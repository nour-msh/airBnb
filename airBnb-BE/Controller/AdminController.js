import Category from "../model/Category";

export async function addCategory(req,res){
    try{
        const category= new Category(req.body);
        await category.save();
        res.status(201).send(category);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};

