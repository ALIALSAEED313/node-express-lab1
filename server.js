

const express = require('express')
const app = express()



app.use(express.static('public'));

//route /test
app.get('/test' , (req , res) =>{
    res.send('<p>Success!</p>')
})

//route /

app.get('/' , (req , res) =>{
    console.log('Welcome to my application Ali')
    res.sendFile(__dirname + '/views/index.html')
})

//route /about

app.get('/about' , (req , res ) =>{
    console.log('Welcom to about page')
    res.sendFile(__dirname + '/views/about.html')
})




app.listen(3000)