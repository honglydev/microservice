const express = require('express');
const app = express();

app.use('public', express.static('./public'));


app.get('/', (req, res)=> {
    const dir = '/Users/ss.hongly/Desktop/microservice/'
    res.sendFile(dir + 'views/index.html');
})



app.listen(3000);