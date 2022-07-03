import express from "express";
import AdminRoutes from "./src/Routes/AdminRoutes.js";

const app = express(),
      port = 5000

app.use(express.json());

app.use("/admin", AdminRoutes)

app.listen(port,()=>console.log(`listen on port ${port}`))
