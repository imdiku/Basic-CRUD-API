const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Product = require("./models/productModels")
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const Randomport = ()=>{
    port = Math.ceil(((Math.random() * 1000)+(Math.random() * 100)+(Math.random() * 10)+ Math.random()) * 5  )

   
    return port;
}

//routes
app.get('/',(req,res)=>{
 res.send(`Hello ${generateRandomPort}` );
})

app.get('/f',(req,res)=>{
    res.send(`Hello f + ${generateRandomPort}` );
   })

   app.get('/d',(req,res)=>{
    res.send(`Hello d + ${generateRandomPort}` );
   })
      

       app.get('/product',async(req,res)=>{
        try {
            const product = await Product.find({});
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
       })

       app.get('/products/:id',async(req,res)=>{
        try {
            const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
       })
      

       //update a product
       app.put('/products/:id',async(req,res)=>{
        try {
            const {id} = req.params;
            const productf = await Product.findByIdAndUpdate(id,req.body);
            //if we could not find the product
            if(!productf){return res.status(404).json({message: `could not find product with id:${id}`});}
            const updatedP = await Product.findById(id);
            res.status(200).json(updatedP);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
       })


       //deleate a product

        app.delete('/products/:id',async(req,res)=>{
            try {
                const {id} = req.params;
                const p = await Product.findByIdAndDelete(id);
                if(!p){return res.status(404).json({message: `could not find product with id:${id}`});}
              
                res.status(200).json(p);
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        })

       //create a product

   app.post('/product',async(req,res)=> {
      try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
      } catch (error) {
          console.log(error.message)
          res.status(500).json({message: error.message})
      }});

const generateRandomPort = Randomport();


mongoose.connect("mongodb+srv://name:password123@server-name.otwzqes.mongodb.net/")
.then(() => {
    console.log("Connected to mongoDB");
    app.listen(3000, ()=> {
        console.log(`Node api is listening on port ${generateRandomPort}`);
    })
}).catch(()=> {console.log(error);})