import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextContents } from "../contexts/context"
import "../styles/movies-selected.scss"

export function MovieSelected() {

    const { movieSelected } = useContext(ContextContents)

    return(
        <div className="movies-selected">
            
            <NavLink to="/">Watch<p>Me</p> </NavLink>

            <img src="https://m.media-amazon.com/images/M/MV5BMTk5NjkyNzEwOV5BMl5BanBnXkFtZTcwODc5NDI1MQ@@._V1_SX300.jpg" alt="" />
            
            <h1> Jubileu o filme</h1>

            <p>English, portuguese</p>

            <p>Lançado em 2000</p>

            <p>Comedia</p>

            <p>tempo de filme</p>

            <p>Heberts Richard</p>

            <p>Jim Carrey </p>

            <p>Avaliação</p>

        </div>
    )
}

// interface MovieProps {
//     imdbID: string;
//     Title: string;
//     Poster: string;
//     Year: string;
//     Released: string;
//     Genre: string;
//     Director: string;
//     Actors: string;
//     Language: string;
//     Production: string;
//     Ratings: Array<{
//       Source: string;
//       Value: string;
//     }>;
//     Runtime: string;
//   }