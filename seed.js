const seed = async () => {
  await db.sync({ force: true });

  // create some pokemon

  // create some trainers

  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);
};
