const { Router } = require("express");
const router = Router();


import{
    addCategory,
    addResort,
} from "../Controller/AdminController"

Router.post("/addCategory", addCategory);
Router.post("/addResort", addResort);