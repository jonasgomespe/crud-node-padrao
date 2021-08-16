const express = require("express");
const router  = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send("Funcionou que beleza")
});

router.get('/teste',(req,res)=>{
    res.status(200).send("Funcionou que teste")
});

router.get('/teste/:id',(req,res)=>{
    res.status(200).send('O id de teste é '+req.params.id);
});


module.exports = router;