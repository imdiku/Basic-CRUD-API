const express = require("express");
const app = express();
const Randomport = ()=>{
    port = Math.ceil(((Math.random() * 1000)+(Math.random() * 100)+(Math.random() * 10)+ Math.random()) * 5  )

   
    return port;
}

//routes
app.get('/',(req,res)=>{
 res.send(`Hello ${generateRandomPort}` );
})

const generateRandomPort = Randomport();
app.listen(generateRandomPort, ()=> {
    console.log(`Node api is listening on port ${generateRandomPort}`);
})