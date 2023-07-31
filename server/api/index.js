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

router.get("/trainer", async (req, res, next) => {
    try {
        const trainer = await Trainers.findAll();
        res.send(trainer);
    } catch(err){
        next(err);
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

router.post("/pokemon", async (req, res) => {
    const newPokemon = await Pokemon.create({ 
        name: "Chimchar", 
        type: "Fire/Fighting", 
        date: "2023-07-19", 
        trainerList: null, 
        imageUrl: "https://img.pokemondb.net/artwork/large/chimchar.jpg"});

    res.json(newPokemon);
});

router.post("/trainer", async (req, res) => {
    const newTrainer = await Trainers.create({ 
        firstName: "Paul",  
        lastName: "",
        team: null, 
        imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png"});

    res.json(newTrainer);
});

router.put("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.update({ name: "PARKACHU"});
    res.send(pokemon);
  } else {
    res.status(404).send("Pokemon not found");
  }
});

router.put("/trainer/:id", async (req, res) => {
  const trainer = await Trainers.findByPk(req.params.id);
  if (trainer) {
    await trainer.update({ firstName: "Shawn"});
    res.send(trainer);
  } else {
    res.status(404).send("Trainer not found");
  }
});

router.delete("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Pokemon not found");
  }
});

router.delete("/trainer/:id", async (req, res) => {
  const trainer = await Trainers.findByPk(req.params.id);
  if (trainer) {
    await trainer.destroy();
    res.status(204).send();
  } else {
    res.status(404).send("Trainer doesnt exist");
  }
});

module.exports = router;
