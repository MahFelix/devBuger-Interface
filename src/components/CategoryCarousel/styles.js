import styled from "styled-components";
import backgroundImage from '../../assets/BG-FUNDO.svg'

export const Container = styled.div`
background-image: url(${backgroundImage});
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;

.rec.rec-arrow {
    background-color: #9758a6;
    color: white;

    &:hover {
        border: 1px solid #9758a6;
        background-color: #efefef;
        color: #9758a6;;
    }

    &:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    
    }
}


`
export const CategoryImg = styled.img`
width: 20%;

`

export const Button = styled.button `
color: white;
margin-top: 16px;
background: #9758a6;
border-radius: 8px;
height: 50px;
border: none;

font-size: normal;
font-weight: bold;
font-size: 18x;
line-height: 100%;
text-align: center;

cursor: pointer;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.6;
}
`

export const ContainerItens = styled.div `
display: flex;
flex-direction: column;
`

export const Image = styled.div `
width: 200px;
border-radius: 10px;
`
