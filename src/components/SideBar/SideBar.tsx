import { Sword, VideoCamera, Knife, UsersThree, MaskSad, MaskHappy } from "phosphor-react";
import { ContainerHeader } from "./styles";

export function SideBar () {
return (
    <ContainerHeader>
    
        <h1>Watch<strong>Me</strong></h1>
    
        <ul>
    
            <li> <Sword /> Ação </li>
            <li> <MaskHappy /> Comédia </li>
            <li> <VideoCamera /> Documentario </li>
            <li> <MaskSad /> Drama </li>
            <li> <Knife /> Terror </li>
            <li> <UsersThree /> Família </li>
    
        </ul>
    
    </ContainerHeader>
    )
}