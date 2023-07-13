const express=require("express")
const { GetFacture, Addfacture, Deletefacture, Editfacture } = require("../controlles/FactureController")


const factureRoutes=express.Router()

factureRoutes.get("/get",GetFacture)
factureRoutes.post("/post",Addfacture)
factureRoutes.delete("/delete/:id",Deletefacture)
factureRoutes.put("/update/:id",Editfacture)


module.exports=factureRoutes ;