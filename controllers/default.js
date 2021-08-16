const express = require("express");
const router  = express.Router();

router.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname.replace('controllers','')+'/html/error.html');
});

module.exports = router;