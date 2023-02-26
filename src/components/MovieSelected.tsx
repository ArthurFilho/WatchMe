import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextContents } from "../contexts/context"
import "../styles/movies-selected.scss"

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: string;
    Released: string;
    Genre: string;
    Director: string;
    Actors: string;
    Language: string;
    Production: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
    Plot: string;
  }

export function MovieSelected() {

    const { movieSelected } = useContext(ContextContents)

    

    return(
        <div className="movies-selected">
            
            <NavLink to="/">Watch<p>Me</p> </NavLink>

            {movieSelected.map((movie:MovieProps)=> {
                return(
                    <>
                    <img src={movie.Poster} alt="" />
            
                    <h1> {movie.Title}</h1>

                    <div className="infos">

                    <div>

                        <p><strong>Language:</strong> {movie.Language} </p>

                        <p><strong>Genre:</strong> {movie.Genre}</p>

                        <p><strong>Production:</strong> {movie.Production}</p>

                        <p><strong>Director:</strong> {movie.Director}</p>

                        <p><strong>Elenco:</strong> {movie.Actors} </p>
                    </div>

                    <div>
                        

                        <p><strong>Released:</strong> {movie.Released}</p>

                        <p><strong>RunTime:</strong> {movie.Runtime}</p>

                        <p><strong>Ratings:</strong>{movie.Ratings[0].Value}</p>
                    </div>
                    
                    </div>

                    
                    </>
                )
            })}

        </div>
    )
}