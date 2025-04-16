const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Server del mio blog');
});
app.get('/bacheca', (req, res) => {
    let posts = [
        {
            titolo: 'ciambellone',
            contenuto: 'ciambellone al cioccolato gustosissimo!',
            immagine: `<img src="./public/img/ciambellone.jpeg" alt="ciambellone">`,
            tags: ['ciambellone', 'cioccolato', 'dolce'] 
        },
        {
            titolo: 'cracker alla barbabietola',
            contenuto: 'cracker alla barbabietola croccanti e leggeri!',
            immagine: `<img src="./public/img/cracker_barbabietola.jpeg" alt="cracker alla barbabietola">`,
            tags: ['cracker', 'barbabietola', 'snack']
        },
        {
            titolo: 'pane fritto dolce',
            contenuto: 'pane fritto dolce con zucchero a velo!',
            immagine: `<img src="./public/img/pane_fritto_dolce.jpeg" alt="pane fritto dolce">`,
            tags: ['pane', 'fritto', 'dolce']
        },
        {
            titolo: 'pasta alla barbabietola',
            contenuto: 'pasta alla barbabietola con pistacchi!',
            immagine: `<img src="./public/img/pasta_barbabietola.jpeg" alt="pasta alla barbabietola">`,
            tags: ['pasta', 'barbabietola', 'primo']
        },
        {
            titolo: 'torta paesana',
            contenuto: 'torta paesana con cioccolato e amaretti!',
            immagine: `<img src="./public/img/torta_paesana.jpeg" alt="torta paesana">`,
            tags: ['torta', 'cioccolato', 'amaretti']
        }
    ];
    res.json(posts);
    let food = req.query.food;
    let filteredPosts = posts.filter((post) =>{
        return post.tags.includes(food);
        
    });
    res.json(filteredPosts);
});

app.listen(port, () => {
    console.log('Server in esecuzione sulla porta ' + port);
})

app.use(express.static('public'));