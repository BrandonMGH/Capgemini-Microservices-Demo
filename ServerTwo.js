const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let villains = [
    {
        id: 0,
        name: 'Sydrome',
        superPower: 'Zero-Point Energy and Flight',
        img: 'https://vignette.wikia.nocookie.net/disney/images/9/96/Profile_-_Syndrome.png/revision/latest?cb=20190315014302'
    },
    {
        id: 1,
        name: 'Joker',
        superPower: 'Being the Joker',
        img: 'https://cnet1.cbsistatic.com/img/1gzKRz3KNXpEAjFXsecawMw2baI=/980x551/2018/07/16/87518406-dde9-41e5-b99b-8ae54755b4c6/jokers-heathledger-1.jpg'
    },
    {
        id: 2,
        name: 'Thanos',
        superPower: 'Demi-God',
        img: 'https://cdn.segmentnext.com/wp-content/uploads/2018/02/avengers_infinity_war_d23_poster.jpg'
    },
]

app.get('/', (req, res)=>{
    res.send('Welcome to the Villains Page');
});

app.get('/villains', (req, res) =>{
    res.send(villains);
});

app.get('/villains/:id', (req, res) =>{
    let villainId = parseInt(req.params.id);
    for(let i = 0; i < villains.length; i++){
        if(villains[i].id === villainId){
            res.send(`<h1>${villains[i].name}</h1>
                    <p>${villains[i].superPower}</p>
                    <img src=${villains[i].img} />
            `);
        };
    };
});

app.post('/villains', (req, res) =>{
    let parsedVillainId = parseInt(req.body.id);
    let newVillain = {
        id: parsedVillainId,
        name: req.body.name,
        superPower: req.body.superPower
    };
    villains.push(newVillain);
    res.send(villains);
});



app.listen(PORT, () =>{
    console.log(`Server is running on PORT: ${PORT}`);
});