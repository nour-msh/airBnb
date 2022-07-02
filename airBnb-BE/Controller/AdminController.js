import Category from "../model/Category";
import Resort from "../model/Resort";

export async function addCategory(req,res){
    try{
        const category= new Category(req.body);
        await category.save();
        res.status(201).send(category);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};


export async function addResort(req,res){
    try{
        const resort= new Resort(req.body);
        await resort.save();
        res.status(201).send(resort);
    } catch(error){
        res.status(400).json({message:error.message});
    }
}

