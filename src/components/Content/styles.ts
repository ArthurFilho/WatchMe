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
    section {
        display: flex;
        background-color: white;
        width: 200px;
        height: 250px;
        margin-right: 20px;
        color: black;
        div {
            display: flex;
            flex-direction: column;
            position: relative;
            color: white;
            ul {
                display: flex;
                gap: 5px;
                align-items: center;
                justify-content: space-around;
            }
            li {
                display: flex;
                gap: 3px;
                list-style: none;
                align-items: center;
            }
        }
        img {
            width: 100%;
        }
    }
`