import { useState, createContext, useEffect } from "react";
import { api } from "../services/api";

interface ContextType {
    HandleGetId: (props:any) => void;
    movieSelected: any;
  } 

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
  }

export const ContextContents = createContext({} as ContextType)

export function ContextProvider({children}: any) {

    const [idMovie, setIdMovie] = useState()

    const [movieSelected, setMovieSelected] = useState<MovieProps[]>([])
    
    useEffect(()=> {
      api.get<MovieProps[]>(`/movies/?imdbID=${idMovie}`).then((response:any) => {
        setMovieSelected(response.data)
      })
    }, [idMovie])
    
    function HandleGetId(props: any){
        setIdMovie(props)
    }

    console.log(movieSelected)

    return(
        <ContextContents.Provider
          value={{
            HandleGetId,
            movieSelected,
          }}
        >
        {children}
        </ContextContents.Provider>
    )
}