import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextContents } from "../contexts/context"
import "../styles/movies-selected.scss"

export function MovieSelected() {

    const { movieSelected } = useContext(ContextContents)

    return(
        <div className="movies-selected">
            
            <NavLink to="/"> <span>Watch<p>Me</p></span> </NavLink>
            
           

        </div>
    )
}