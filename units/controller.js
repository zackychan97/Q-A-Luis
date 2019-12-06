const router = require('express').Router();

let units = [
    {
        id: 1,
        name: 'warrior',
        type: 'melee',
        attack: 10,
        defense: 20
    }
];

router.get('/', (req, res) => {
    res.status(200).json(units);
})


router.get('/:id', (req, res) => {
    
})

router.post('/', (req, res) => {
    const unitInformation = req.body;

    const newUnits = [...units, unitInformation];

    res.status(201).json(newUnits);
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})



module.exports = router;