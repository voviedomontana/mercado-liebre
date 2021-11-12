const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3050, ()=>{
    console.log('Servidor funcionando en el puerto 3050');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,"/views/register.html"))
});
