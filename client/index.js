import React from "react";
import { createRoot } from "react-dom/client";
import {AshBio, PikachuBio, PokemonList, TrainerList} from "./Main";

const root = createRoot(document.getElementById("app"));

root.render(
    <>
        <PokemonList/>
        <TrainerList/>
        <PikachuBio/>
        <AshBio/>
    </>
);
