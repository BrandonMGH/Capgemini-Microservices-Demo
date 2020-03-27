const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let heroes = [
    {
        id: 0,
        name: 'Mr. Incredible',
        superPower: 'Super Speed',
        img: 'https://vignette.wikia.nocookie.net/disney/images/d/d2/Profile_-_Bob_Parr.jpeg/revision/latest?cb=20190313155821'
    },
    {
        id: 1,
        name: 'Elasti-Girl',
        superPower: 'Body-morphing',
        img: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Helen_Parr.png'
    },
    {
        id: 2,
        name: 'Dash',
        superPower: 'Super Speed',
        img: 'https://upload.wikimedia.org/wikipedia/en/2/25/Image_of_Dashiell_%22Dash%22_Par_as_he_appears_in_The_Incredibles_and_it%27s_sequel.png'
    },
    {
        id: 3,
        name: 'Violet',
        superPower: 'Invisibility and Force Field Projection',
        img: 'https://vignette.wikia.nocookie.net/the-incredibles/images/3/36/I2_-_Violet_2.png/revision/latest?cb=20181206194936'
    },
];

app.get('/', (req, res) => {
    res.send('Welcome to the Heroes Page');
});

app.get('/heroes', (req, res) => {
    res.send(heroes);
});

app.get('/heroes/:id', (req, res) => {
    let heroId = parseInt(req.params.id);
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].id === heroId) {
            res.send(`<h1>${heroes[i].name}</h1>
                <p>Superpower: ${heroes[i].superPower}</p>
                <img src=${heroes[i].img} />`
            );
        };
    };
});

app.post('/heroes', (req, res) => {
    let parsedHeroId = parseInt(req.body.id);
    let newHero = {
        id: parsedHeroId,
        name: req.body.name,
        superPower: req.body.superPower
    };
    heroes.push(newHero);
    res.send(heroes);
});



app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});