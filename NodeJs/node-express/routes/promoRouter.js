const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("Will send all the promotions to you!");

})
.post((req,res,next)=>{
    res.end('Will add the promotion: '+req.body.name+' with details'+req.body.description);

})
.put((req,res,next)=>{
    res.end("PUT operation is not suppported on /promotions");
})
.delete((req,res,next)=>{
    res.end('Deleting all the Promotions');
});



promoRouter.route('/:promoId')
.get((req,res,next)=>{
    res.end('Will send all details of the promotions: '+req.params.promoId+ ' to you');
  })
  promoRouter.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /promotion '+req.params.promoId);
  })
  
  promoRouter.put((req,res,next)=>{
    res.write('Updating the promotion: '+req.params.promoId);
    res.end('\nWill update the promotion: '+ req.body.name+' with details ' +req.body.description);
  })
  
  promoRouter.delete((req,res,next)=>{
    res.end('Deleting  the promotion :'+req.params.promoId);
  });
  

module.exports=promoRouter;