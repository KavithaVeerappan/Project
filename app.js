const express = require('express');
const app = express();
/*app.get('/',(req,res) => {
    res.send("Hello World!");
});

app.get('/blog',(req,res) => {
    res.send("Hello blog!");
});*/

const insertRoute = require('./routes/insert');
const displayRoute = require('./routes/display');
app.use('/insert', insertRoute);

app.use('/display', displayRoute);

app.listen(4000, () => {
    console.log("App is running on 4000")

})

//module.exports = app;