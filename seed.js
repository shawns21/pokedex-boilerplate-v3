const fs = require("fs");
const { db, Pokemon, Trainers } = require("./server/db");


const seed = async () => {
  await db.sync({ force: true });
  console.log("Table created and synced with database.");

  // create some pokemon

  const pikachu = await Pokemon.create({
    name: "Pikachu",
    type: "Electric",
    trainerlist: null, 
    date: '2023-07-19',
    imageUrl: "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
  })

  const jigglypuff = await Pokemon.create({
    name: "Jigglypuff",
    type: "Normal/Fairy",
    trainerlist: null, 
    date: '2023-07-19',
    imageUrl: "https://archives.bulbagarden.net/media/upload/3/3a/0039Jigglypuff.png",
  })

  const gengar = await Pokemon.create({
    name: "Gengar",
    type: "Ghost/Poison",
    trainerlist: null, 
    date: '2023-07-19',
    imageUrl: "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
  })

  const charizard = await Pokemon.create({
    name: "Charizard",
    type: "Fire/Flying",
    trainerlist: null, 
    date: '2023-07-19',
    imageUrl: "https://www.giantbomb.com/a/uploads/square_medium/13/135472/1891763-006charizard.png",
  })

  // create some trainers

  const ash = await Trainers.create({
    firstName: "Ash",
    lastName: "Ketchum",
    team: null, 
    imageUrl: "https://www.giantbomb.com/a/uploads/scale_small/46/462814/3188850-8400957030-Ash_S.png",
  })

  const misty = await Trainers.create({
    firstName: "Misty",
    lastName: "",
    team: null, 
    imageUrl: "https://www.giantbomb.com/a/uploads/scale_small/1/12541/1439217-misty_main_image.png",
  })

  const brock = await Trainers.create({
    firstName: "Brock",
    lastName: "Harrison",
    team: null, 
    imageUrl: "https://www.giantbomb.com/a/uploads/scale_small/9/95666/1906767-heartgold_soulsilver_brock.png",
  })



  await ash.addPokemons([pikachu, charizard]);
  await misty.addPokemon(jigglypuff);
  await brock.addPokemon(gengar);


  db.close();
  console.log(`Seeding successful! Pokedex is ready.`);
};


seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});