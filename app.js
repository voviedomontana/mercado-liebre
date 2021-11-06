const express = require('express')
const app = express ()
const path = require ('path')
const bodyParser = require('body-parser');

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath))

const PORT = 3000

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.get('/',function(req,res){
    let dir = path.resolve(__dirname,"./views/home.html");
    res.sendFile(dir)
})

app.get('/register',function(req,res){
    let dir = path.join(__dirname,"./views/register.html");
    res.sendFile(dir)
})

app.get('/login', function(req, res) {
    let dir = path.join(__dirname,'./views/login.html');
    res.sendFile(dir)
});

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Servidor andando sin problemas en el puerto 3000')
});
    

