const express = require('express');
const app = express();
const port = 3000;

let posts = [
    {
        titolo: 'ciambellone',
        contenuto: 'ciambellone al cioccolato gustosissimo!',
        immagine: `./img/ciambellone.jpeg`,
        tags: ['ciambellone', 'cioccolato', 'dolce'] 
    },
    {
        titolo: 'cracker alla barbabietola',
        contenuto: 'cracker alla barbabietola croccanti e leggeri!',
        immagine: `./img/cracker_barbabietola.jpeg`,
        tags: ['cracker', 'barbabietola', 'snack']
    },
    {
        titolo: 'pane fritto dolce',
        contenuto: 'pane fritto dolce con zucchero a velo!',
        immagine: `./img/pane_fritto_dolce.jpeg`,
        tags: ['pane', 'fritto', 'dolce']
    },
    {
        titolo: 'pasta alla barbabietola',
        contenuto: 'pasta alla barbabietola con pistacchi!',
        immagine: `./img/pasta_barbabietola.jpeg`,
        tags: ['pasta', 'barbabietola', 'primo']
    },
    {
        titolo: 'torta paesana',
        contenuto: 'torta paesana con cioccolato e amaretti!',
        immagine: `./img/torta_paesana.jpeg`,
        tags: ['torta', 'cioccolato', 'amaretti']
    }
];
// for(let i = 0; i < posts.length; i++){
//     //console.log(posts[i].immagine);
//     if(posts[i].immagine.includes('barbabietola') ){
//         console.log(posts[i].immagine);
//     }
// }
app.use("/",express.static("public"));
app.get('/', (req, res)=>{
    //res.send('Server del mio blog');
    res.json({
        messaggio : 'server del mio blog',
        post: posts,
    });
});
app.get('/bacheca', (req, res) => {
    let food = req.query.food;
    let filteredPosts = posts.filter((post) =>{
        return post.tags.includes(food);   
    });
    res.json(filteredPosts);
});

app.listen(port, () => {
    console.log('Server in esecuzione sulla porta ' + port);
})

