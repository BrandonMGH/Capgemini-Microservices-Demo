const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let heroes = [
    {
        id: 0,
        name: 'Mr. Incredible',
        superPower: 'Super Speed'
    },
    {
        id: 1,
        name: 'Elasti-Girl',
        superPower: 'Can stretch her body into any shape'
    },
    {
        id: 2,
        name: 'Dash',
        superPower: 'Super Speed'
    },
    {
        id: 3,
        name: 'Violet',
        superPower: 'Invisibility and Force Fields'
    },
];

app.get('/', (req, res)=>{
    res.send('Server is running');
});

app.get('/heroes', (req, res) =>{
    res.send(heroes);
});

app.get('/heroes/:id', (req, res) =>{
    let heroId = parseInt(req.params.id);
    for(let i = 0; i < heroes.length; i++){
        if(heroes[i].id === heroId){
            res.send(heroes[i].name);
        };
    };
});

app.post('/heroes', (req, res) =>{
    let parsedHeroId = parseInt(req.body.id);
    let newHero = {
        id: parsedHeroId,
        name: req.body.name,
        superPower: req.body.superPower
    };
    heroes.push(newHero);
    res.send(heroes);
});



app.listen(PORT, () =>{
    console.log(`Server is running on PORT: ${PORT}`);
});