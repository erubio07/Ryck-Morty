import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function About (props) {
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

    return <div>
        <h1>{character.name}</h1>
    </div>
}