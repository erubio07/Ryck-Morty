import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import About from "./About";
//Nav se convierte en padre de SearchBar

const NavStyle = styled.div `
    background-color: salmon;
    color: black;
    padding: 5px 20px;
    box-sizing: border-box; 
    border-radius: 6px;
    padding: 25px; 
    margin: 1px;
    opacity: 90%;
`

export default function Nav ({onSearch}) {

    
    return (
    <NavStyle>
        <NavLink to="/home">Home</NavLink>
        <br/>
        <NavLink to="/about">About</NavLink>
        <SearchBar onSearch = {onSearch}/>
    </NavStyle>
    )
}