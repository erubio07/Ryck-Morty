import React from "react";
import SearchBar from "./SearchBar";


//Nav se convierte en padre de SearchBar
export default function Nav ({onSearch}) {

    return (
    <div>
        <SearchBar onSearch = {onSearch}/>
    </div>
    )
}