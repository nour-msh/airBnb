import { Router } from 'express';
import { addCategory, addResort, getAllCat } from "../Controller/AdminController.js";

const AdminRoutes = Router();

AdminRoutes.post("/addCategory", addCategory);
AdminRoutes.post("/addResort", addResort);
AdminRoutes.get("/getCategories", getAllCat);

export default AdminRoutes;