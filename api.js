const port = 4646;

const telegram = require("node-telegram-bot-api");
const express = require('express')();

express.listen(port, () => {
    console.log(`Running on Port: ${port}`)
})

express.get("/fileDL", (req, res, nx) => {
    const token = req.query.token;
    const fileIDtoDl = req.query.file_id;

    try{
        if (token === undefined || fileIDtoDl === undefined){
            res.send("Please Set the token or file_id parameter");
        }else{
            const app = new telegram(token, {polling: true});
            app.getFile(fileIDtoDl).then((dataForDl) => {
                res.send(dataForDl);
            })
        }
    }catch(err){
        res.send(err);
    }
});

