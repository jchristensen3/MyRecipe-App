const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes');


app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'));
app.use('/recipes', routes.recipes);
app.use(express.static(__dirname + '/public'));
app.use('/users', routes.users);


app.listen(3000, () => {
    console.log("I'm listening!!!");
})