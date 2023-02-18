import { ContainerMovie, Movie } from "./styles";
import { Star, Timer } from "phosphor-react";
import MoviePicture from "../../styles/moviel.png"

export function Content() {
    return(
        <ContainerMovie>
        <h1>categoria: </h1>

        <Movie>
            <div>
                <img src={MoviePicture} />
                <h4>filme</h4>
                <p><Star color="gold" /> 3 </p> 
                <p><Timer color="gold" /> 10/10</p>
            </div>            
        </Movie>

        </ContainerMovie>
    )
}