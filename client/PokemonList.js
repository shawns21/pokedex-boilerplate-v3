import React, { useEffect, useState } from "react";
import axios from "axios";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/pokemon");
        setPokemon(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <img src={p.image} alt={p.name} />
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
