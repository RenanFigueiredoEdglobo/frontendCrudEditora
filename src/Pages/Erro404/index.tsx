import React from "react"
import styled from "styled-components";
const DivImg = styled.div`
justify-content: center;
display: flex;
img{
    width: 45%;
    height: auto;
}
`;
const DivP = styled.div`
    p{
    text-align: center;
    font-size: 26px;
    color: #b64545;
    }

`;
const PageErro404 = ()=>{
    return(
        <>
        <DivImg className="bloco-img">
            <img src="https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg?w=2000" alt="imagem do erro 404"/>
        </DivImg>
        <DivP className="blocoP"><p>Pagina não encotrada :(</p></DivP>
        </>
    )
}
export default PageErro404