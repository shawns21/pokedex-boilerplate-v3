const router = require("express").Router();
const { Pokemon, Trainers } = require("../db");

// Connect your API routes here!

router.get("/pokemon", async (req, res, next) => {
    try {
        const pokemons = await Pokemon.findAll();
        res.send(pokemons);
    } catch(err){
        next(err);
    }
});

router.get("/pokemon/:id", async (req, res, next) => {
    try {
        const pokemon = await Pokemon.findOne({
            where: { id: req.params.id },
            include: Trainers,
        });

        console.log(pokemon);
        res.send(pokemon);
    }
    catch (err) {
        next (err);
    }
});

router.get("/trainer/:id", async (req, res, next) => {
    try {
        const trainer = await Trainers.findOne({
            where: { id: req.params.id },
            include: Pokemon,
        });

        console.log(trainer);
        res.send(trainer);
    }
    catch (err) {
        next (err);
    }
});

module.exports = router;
