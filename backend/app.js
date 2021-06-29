const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

const mongoose = require('mongoose');
const postsRoutes = require("./routes/posts");


mongoose.connect("mongodb+srv://Bhupendra:z9KgkvUCNeS7wUcP@cluster0.utjai.mongodb.net/node-angular?retryWrites=true&w=majority",{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology : true })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(() => {
        console.log("Connection Failed!");
    })
/* db pass - z9KgkvUCNeS7wUcP */


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

app.use("/api/posts", postsRoutes);


module.exports = app;