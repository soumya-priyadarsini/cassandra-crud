const express = require('express');
const app = express();

const PORT = 8000;
app.use(express.json())

app.use('/userLogin',require('./router/router'))

app.listen(PORT ,() =>{
    console.log(`Server run in Port ${PORT}`);
})