const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router')

const app = express();

const port = 8000;

app.use(bodyParser());
app.use(cors());
app.use("/", router)
app.use("/api/alluser", router)
app.use("/api/adduser", router)
app.listen(port, ()=> console.log("Server started at port 8000"))