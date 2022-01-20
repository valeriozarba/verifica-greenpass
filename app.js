var createError = require('http-errors');
const express = require("express");
const app = express();
var path = require('path');
const port = 9999;
const {Certificate, Validator} = require('verificac19-sdk');
const syncdata = require('./syncData');
const multer  = require('multer')
const fs = require("fs");


/*
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './data/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})*/
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + "/client/build/"));
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const main = async (req,res) => {
    try{
        let buffer= Buffer.from(new Uint8Array(req.file.buffer));

        console.log("Check request BUFFER:",buffer.buffer);

        
        let typeVerifica=null;
        switch(req.body.verificaType){
            case 1:
                typeVerifica=Validator.mode.NORMAL_DGP;
            break;
            case 2:
                typeVerifica=Validator.mode.SUPER_DGP;
            break;
            case 3:
                typeVerifica=Validator.mode.BOOSTER_DGP;
            break;
            default:
                typeVerifica=Validator.mode.NORMAL_DGP;
        }
        const image = await Certificate.fromImage(buffer);
        const validationResult = await Validator.validate(image,typeVerifica);
        res.json(validationResult); 
    }catch(error){
        console.log(error);
        res.json(error); 
    }
}

app.post('/validate', upload.single('qrcode'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    main(req,res);
})

app.get("/validate",(req,res)=>{
    console.log("Check request METHOD:",req.method);
    console.log("Check request BODY:",req.body);
    main(req,res);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/client/build/index.html");
});


app.get("/sync", (req, res) => {
    syncdata();
    res.json({syncstatus:true}); 
});

app.listen(port, function() {
    syncdata();
    console.log(`Server listening on port ${port}`);
});