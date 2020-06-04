const express  = require('express');
const http = require('http');
const morgan= require('morgan');
const bodyParser= require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.all('/dishes',(req,res,next)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type','test/plain');    
      next();                      
});
app.get('/dishes',(req,res,next)=>{
    res.end('Will send all the dishes to you');
});
app.post('/dishes',(req,res,next)=>{
    res.end('Will add the dish: '+ req.body.name+' with details '+req.body.description);
});

app.put('/dishes',(req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes ');
});

app.delete('/dishes',(req,res,next)=>{
    res.end('Deleting all the dishes to you');
});

app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will send all details of the dishes: '+req.params.dishId+ ' to you');
});
app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes '+req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating the dish: '+req.params.dishId);
    res.end('Will update the dish: '+ req.body.name+' with details ' +req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('Deleting  the dish :'+req.params.dishId);
});


app.use(express.static(__dirname+'/public'))
app.use((req,res,next)=>{
    
    res.statusCode =200;
    res.setHeader('Content-Type','text/hmtl');
    res.end('<html><body>This is express sever</body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname,()=>{
console.log(`Server running at http://${hostname}:${port}`);
});