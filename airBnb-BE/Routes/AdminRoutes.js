const { Router } = require("express");
const router = Router();


import{
    addCategory,
} from "../Controller/AdminController"

Router.post("/", addCategory)