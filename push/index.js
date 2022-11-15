const express = require("express");
const ejs = require("ejs")

const server = express()

server.use(express.static ("public"));

server.set("view engine","ejs")



server.listen(8000, () =>{
    console.log("Server dey listen......")
})





server.get("/", (req, res) =>{
    const newBio = [
        { name:"Asimiyu Temitope",  score:100,   state:"Osun State",  nationality:"Nigerian"},
        {name:"Dumebi Chinaza", score:50, state:"Osun state", nationality:"Nigerian"},
        {name:"Kwesi Arthur", score:90, state:'Accra', nationality:'Ghana'}
        
    ]

    
       
        
   
    
    res.render("index", {newBio})
   
})
