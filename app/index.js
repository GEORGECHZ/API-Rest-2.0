let express = require('express');
let app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

let router = require('./routes');
app.use('/api', router);

console.log('Escuchando api 3000');
app.listen(3000);