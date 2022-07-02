const express=require ("express")
const app= express()
const port =5000
app.use(express.json());
const AdminRoutes= require ("./Routes/AdminRoutes")

app.listen(port,()=>console.log(`listen on port ${port}`))
