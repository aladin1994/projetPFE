const express=require("express")
const connectDb = require("./config/connectDb")
const userRoutes = require("./routes/userRoutes")
const articleRoutes = require("./routes/Articleroutes")
const factureRoutes = require("./routes/FactureRoutes")
const app=express()
const port=7000
app.use(express.json())

connectDb()
app.use("/api/user",userRoutes)
app.use("/api/article",articleRoutes)
app.use("/api/facture",factureRoutes)
app.listen(port,console.log(`app is ruuning on port ${port}`))