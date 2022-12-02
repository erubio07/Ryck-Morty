import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Detail () {
    const {detailId} = useParams();
    const [character, setCaharacter] = useState();
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCaharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCaharacter({});
     }, [detailId]);

    return <div>{character ? <div>
        <div>
        <h1>Nombre: {character.name}</h1>
        <h5>Status: {character.status}</h5>
        <h5>Specie: {character.specie}</h5>
        <h5>Género: {character.gender}</h5>
        <h5>Origen: {character.origin?.name}</h5>
        </div>
        <img src={character.image} alt={character.name}/>
        </div> : ""}</div>;
}