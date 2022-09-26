import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import IAutor from "../../../interfaces/IAutor";

const AtualizarAutor = ()=>{
    const parametros = useParams();
    const [nome, setNome] = useState('')
    const [idade,setIdade] = useState('')
    useEffect(()=>{
        if(parametros.id){
            api.get<IAutor>(`atualizar-autor/${parametros.id}`)
            .then(resposta => setNome(resposta.data.nome))
        }
    },[parametros])
    
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>)=>{

        if(parametros.id) {
            api.put(`atualizar-autor/${parametros.id}`,{
                nome: nome,
                idade: idade
            })
            .then(()=>{
                alert("Autor atualizado com sucesso")
                window.open('/autores');
            })
        }else{
            api.post('cadastrar-autor/',{
                nome: nome,
                idade:idade
            })
            .then(()=>{
                alert("Autor cadastrado");
                window.open('/autores');
            })
        }
    }
    return(
        <>
        <Box sx={{marginLeft:'auto',marginRight:'auto', backgroundColor: '#bbb3b3',width:'40%',borderRadius:'10px',marginTop:'2%'}}>
            <Typography component={"h1"} variant={"h6"} sx={{textAlign: 'center',margin:'1%',color:'#111111'}} >Cadastre sua Noticia</Typography>
            <Box component="form" sx={{display:'grid',justifyContent:'center'}} onSubmit={aoSubmeterForm}>
                <TextField
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                label="Nome do autor"
                fullWidth
                required
                />
                <TextField
                value={idade}
                onChange={evento => setIdade(evento.target.value)}
                label="idade do autor"
                fullWidth
                required
                type="number"
                />
                <Button sx={{marginTop: 1}} type="submit"  fullWidth variant="outlined" >Cadastrar Noticia</Button>
            </Box>
        </Box>
        </>
    )
}
export default AtualizarAutor;