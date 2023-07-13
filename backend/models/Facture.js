const mongoose=require("mongoose")

const FactureSchema=new mongoose.Schema({
    client:String,
    caissier:String,
    montant:Number,
    percu:Number,
    rendu: Number,
    etat : String

})
module.exports=mongoose.model("Facture",FactureSchema)