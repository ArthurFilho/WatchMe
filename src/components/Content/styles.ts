import styled from "styled-components";

export const ContainerMovie = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 80px;
    margin-top: 40px;
`

export const Movie = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
    div {
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 200px;
        height: 250px;
        margin-right: 20px;
        color: black;
        img {
            position: relative;
        }
    }
`