import { connect } from "react-redux"
import { Card } from "./Card"




export function Favorites ({myFavorites}){

    return <div>
        {myFavorites?.map((ch, i) => {
            <Card 
                key = {ch.id}
                id={ch.id}
                name = {ch.name}
                species = {ch.species}
                gender = {ch.gender}
                image = {ch.image}
            />
        })}
    </div>
}

export function mapStateToProps (state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps,null)(Favorites)