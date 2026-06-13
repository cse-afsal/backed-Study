const express = require('express');

const app = express();

//middleware
app.use(express.json())

let books=[
    {
        id:1,
        title:'book 1'
    },
     {
        id:2,
        title:'book 2'
    }
];


//intro routes
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to our bookstore api",

    });
});

// get all books
app.get('/get',(req,res)=>
{
  res.json(books);
});

//get single book
app.get('/get/:id',(req,res)=>
{
    const book = books.find(item=> item.id === req.params.id);
    if (book){
        res.status(200).json(book)
    }else{
        res.status(404).json({
            message:"Book not found! Please try with a diffrent book id",
        });

    }
});


app.post('/add', (req,res)=>{
    const newBook ={
        id : books.length +1,
        title : `Book ${ books.length +1}`
    }

    books.push(newBook)
    res.status(200).json({
        data: newBook,
        message: "New book is added successfully",
    });
});


// Update a book
app.put('/update/:id',(req,res)=>{
    const findCurrentbook = books.find(bookItem=>bookItem.id === req.params.id);
    if(findCurrentbook){
        findCurrentbook.title = req.body.title || findCurrentbook.title

        res.status(200).json({
            message :`Book with Id ${req.params.id} update sucessfully`,
            data : findCurrentbook
        })
    }else{
        res.status(404).json({
        message:"Book not found",
        });
    }

});

// delete a book
app.delete('/delete/;id ',(req,res)=>{
    const findIndexofCurrentBook = books.findIndex(item=> item.id === req.params.id);
    if(findIndexofCurrentBook !== -1){
        const deletedBook = books.splice(findIndexofCurrentBook,1);
        res.status(200).json({
            message:'Book deleted successfully',
            data: deletedBook[0]
        })
    }else{
        res.status(404).json({
        message:"Book not found",
        });
    }
})

const port=3000;
app.listen(port,()=>{
    console.log(`Server is now running on port ${port}`);

});