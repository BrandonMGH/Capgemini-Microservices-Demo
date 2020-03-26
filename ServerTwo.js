const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let villains = [
    {
        id: 0,
        name: 'Sydrome',
        superPower: 'Zero-Point Energy and Flight'
    },
    {
        id: 2,
        name: 'Joker',
        superPower: 'Being the Joker'
    },
    {
        id: 2,
        name: 'Thanos',
        superPower: 'Demi-God'
    },
]

app.get('/', (req, res)=>{
    res.send('Server is running');
});

app.get('/villains', (req, res) =>{
    res.send(villains);
});

app.get('/villains/:id', (req, res) =>{
    let villainId = parseInt(req.params.id);
    for(let i = 0; i < villains.length; i++){
        if(villains[i].id === villainId){
            res.send(villains[i].name);
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