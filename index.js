const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Product = require('./schema');
const port = 9000;
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sivaharshanfastbokz:uoazQaGUCRMUERcC@cluster0.lcmnw6s.mongodb.net/search_app?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
}
);

app.get('/search/:name',async(req,res)=>{
    try {
        const data = await Product.find({
            "$or":[
                {
                    productName:{$regex:req.params.name}
                }
            ]
        });
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(port,()=>{
    console.log(`server is started on port ${port}`)
})