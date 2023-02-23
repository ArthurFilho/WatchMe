import { useEffect, useState, useContext } from "react";
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
              <button onClick={() => {HandleGetId(movie.imdbID)}}>
                <MovieCard 
                  key={movie.imdbID} 
                  title={movie.Title} 
                  poster={movie.Poster} 
                  runtime={movie.Runtime} 
                  rating={movie.Ratings[0].Value} />
              </button>
            ))}
          </div>
        </main>
      </div>
  )
}