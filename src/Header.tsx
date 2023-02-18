import { Sword, VideoCamera, Knife, UsersThree, MaskSad, MaskHappy } from "phosphor-react";
import { ContainerHeader } from "./styles/header/styles";

export function Header () {
return (
    <ContainerHeader>
        <h1>WatchMe</h1>
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