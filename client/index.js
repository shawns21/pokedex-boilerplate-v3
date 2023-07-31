import React from "react";
import { createRoot } from "react-dom/client";
import {PokemonList, TrainerList} from "./Main";

const root = createRoot(document.getElementById("app"));

root.render(
    <>
        <PokemonList/>
        <TrainerList/>
    </>
);
