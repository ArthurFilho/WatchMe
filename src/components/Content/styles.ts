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
        position: relative;
        width: 300px;
        height: 250px;
        margin-right: 20px;
        color: black;
        box-shadow:0 1px 2px 0 rgba(0,0,0,0.1);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        margin-bottom: 30px;
        
        div {
            display: flex;
            flex-direction: column;
            position: absolute;
            color: white;
            margin-top: 200px;
            margin-left: 30px;
            
            h4 {
                margin-bottom: 5px;
            }
            
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
            position: relative;
        }
    }
        section:hover{
            transform:scale(1.1,1.1);
            }
`