const express = require('express');

const sqlDbConnect = require('./dbconnect')

const Router = express.Router();

Router.get("/api/alluser", (req, res) => {
    sqlDbConnect.query("SELECT * FROM alluser; \ SELECT * FROM referral", (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
})

Router.post("/api/adduser", (req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;  
    const refcode = req.body.refcode; 

    var sql = `INSERT INTO alluser(refcode,name,email,number) VALUES("${refcode}","${name}","${email}",${number})`
    var ref = `INSERT INTO referral(refcode,name) VALUES("${refcode}","${name}")`

    sqlDbConnect.query(sql, (err, result) => {
        if (!err) {
            res.status(200).json({success:"User Added successfully"});
        } else {
            console.log(err);
        }
    })
    sqlDbConnect.query(ref, (err, result) => {
        if (!err) {
            res.status(200).json({success:"Referral Added successfully"});
        } else {
            console.log(err);
        }
    })
})


module.exports = Router