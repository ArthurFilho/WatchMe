import { ContainerMovie } from "./styles";
import { Star, Timer } from "phosphor-react";

export function Content() {
    return(
        <ContainerMovie>
        <h1>categoria: </h1>

        <div>
            <p></p>
            <div>
                <p><Star /> </p> 
                <p><Timer /> </p>
            </div>
        </div>

        </ContainerMovie>
    )
}