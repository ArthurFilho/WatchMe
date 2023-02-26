import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextContents } from "../contexts/context";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard"

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({ selectedGenreId, selectedGenre}: any) {

  const { HandleGetId } = useContext(ContextContents)

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    })
  },[selectedGenreId]);

  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map((movie: any) => (
              <button key={movie.imdbID} onClick={() => {HandleGetId(movie.imdbID)}}>
                <NavLink to="/moviesinfo">
                <MovieCard  
                  title={movie.Title} 
                  poster={movie.Poster} 
                  runtime={movie.Runtime} 
                  rating={movie.Ratings[0].Value} />
                  </NavLink>
              </button>
            ))}
          </div>
        </main>
      </div>
  )
}