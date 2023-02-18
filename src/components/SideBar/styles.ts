import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    width: 500px;
    height: 100%;
    background-color: #1A1A1A;
    flex-direction: column;
    align-items: center;

    h1 {
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        color: yellow;
        
        strong {
            color: white;
        }
    }
    
    ul {
        margin-top: 70px;
    
        li {
            border-radius: 5px;
            width: 300px;
            display: flex;
            background-color: #333333;
            border: 1px solid black;
            margin-top: 30px;
            list-style: none;
            padding: 20px;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            color: white;
    }
    }
    
`