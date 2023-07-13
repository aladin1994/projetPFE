
const FactureSchema = require("../models/Facture");

exports.Addfacture = async (req, res) => {
    try {
      const facture = new FactureSchema(req.body);
      await facture.save();
      res.status(200).send({ msg: "facture added", facture });
    } catch (error) {
      res.status(500).send(error);
    }
  };


exports.GetFacture = async (req , res)=>{
    try {
        const facture  = await FactureSchema.find()
        res.status(200).send({ msg: " list of factures", facture });
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.Deletefacture = async (req, res) => {
    try {
      await FactureSchema.findByIdAndDelete(req.params.id);
      res.status(200).send("facture deleted");
    } catch (error) {
      res.status(500).send(error);
    }
  };
  exports.Editfacture = async (req, res) => {
    try {
      const facture = await FactureSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      },{new:true});
      res.status(200).send({msg:"facturee updated",facture})
    } catch (error) {
      res.status(500).send(error);
    }
  };
  