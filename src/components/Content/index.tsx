import { ContainerMovie, Movie } from "./styles";
import { Star, Timer } from "phosphor-react";
import MoviePicture from "../../styles/moviel.png"

export function Content() {
    return(
        <ContainerMovie>
        <h1>categoria: </h1>

        <Movie>
            <section>
                <img src={MoviePicture} />
                <div>
                    <h4>filme</h4>
                    <ul>
                        <li><Star color="gold" size={24} /> 10/10 </li>
                        <li><Timer color="gold" size={24} /> 3min </li>
                    </ul>
                </div>
            </section>       
            <section>
                <img src={MoviePicture} />
                <div>
                    <h4>filme</h4>
                    <ul>
                        <li><Star color="gold" size={24} /> 10/10 </li>
                        <li><Timer color="gold" size={24} /> 3min </li>
                    </ul>
                </div>
            </section>
            <section>
                <img src={MoviePicture} />
                <div>
                    <h4>filme</h4>
                    <ul>
                        <li><Star color="gold" size={24} /> 10/10 </li>
                        <li><Timer color="gold" size={24} /> 3min </li>
                    </ul>
                </div>
            </section>
            <section>
                <img src={MoviePicture} />
                <div>
                    <h4>filme</h4>
                    <ul>
                        <li><Star color="gold" size={24} /> 10/10 </li>
                        <li><Timer color="gold" size={24} /> 3min </li>
                    </ul>
                </div>
            </section>
        </Movie>

        </ContainerMovie>
    )
}