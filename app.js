const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Server del mio blog');
    console.log('Server in esecuzione sulla porta ' + port);
});

app.listen(port, () => {
    console.log('Server in esecuzione sulla porta ' + port);
})

app.use(express.static('public'));