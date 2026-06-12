const express = require('express');
const app = express();


// root route
app.get("/",(req,res)=>
{
    res.send("welcome to our home page");
});

app.get("/products",(req,res)=>
{
    const products = [
        {
            id : 1,
            label : 'Product 1'
        },
        {
            id : 2,
            label : 'Product 2'
        },
        {
            id : 3,
            label : 'Product 3'
        }
    ]

    res.json(products);
});

// get a single product
app.get('/product/:id',(req,res)=>{
    const productId = parseInt(req.params.id);

     const products = [
        {
            id : 1,
            label : 'Product 1'
        },
        {
            id : 2,
            label : 'Product 2'
        },
        {
            id : 3,
            label : 'Product 3'
        },
    ];

    const getSingleProduct = products.find(product=>products.id === productId )
    
    if(getSingleProduct){
        res.json(getSingleProduct);
    }else{
        res.status(404).send("product is not found ");
    }
     
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is now running at port ${port}`);
});