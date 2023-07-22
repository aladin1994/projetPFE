const mongoose=require("mongoose")

const FactureSchema=new mongoose.Schema({
    client:String,
    caissier:String,
    montant:Number,
    percu:Number,
    rendu: Number,
    etat : String,
    date: Date

})
module.exports=mongoose.model("Facture",FactureSchema)