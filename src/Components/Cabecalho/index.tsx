import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";

const Topo = styled.header`
margin-top: 5px;
min-width: 100%;
height: auto;
background-color: #615c5c;
`;
const Links = styled.div`
list-style:none;
display: flex;
justify-content: center;
a{
    margin: 0px 4px 0px 4px;
    text-decoration: none;
    color: #e2e2e2;
    border: 10px solid #615c5c;
}
a:hover{
    border: 10px solid #e2e2e2;
    background-color: #e2e2e2;
    color: black
}
`;
const Cabecalho =()=>{
    return(
        <Topo id="toppo">
            <Links>
                <Link to='/'>Home</Link>
                <Link to='/cadastrar-noticia'>Cadastrar Noticias</Link>
                <Link to='/cadastrar-autor'>Cadastrar autor</Link>
                <Link to='/autores'>Vizualizar Autores</Link>
                <Link to='/noticias'>Vizualizar Noticias</Link>
            </Links>
        </Topo>
    )
}
export default Cabecalho;