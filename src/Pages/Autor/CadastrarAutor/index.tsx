import React from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import Cabecalho from "../../../Components/Cabecalho";
import { useState } from "react"
import api from "../../../api";
const CadastrarAutor = () => {
    const [nome, setNome]=useState('');
    const [idade, setIdade]=useState('');
    
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault()
        api.request({
            url: 'cadastrar-autor/',
            method: 'POST',
            data:{
                nome: nome,
                idade:idade
            }
        })
            .then(()=>{
                setNome('')
                setIdade('')
                alert('autor cadastrado')
            })
            .catch(erro => console.log(erro))
            
    }
    return(
        <>
        <Cabecalho />

        <Box sx={{marginLeft:'auto',marginRight:'auto',backgroundColor: '#bbb3b3',width:'40%',borderRadius:'10px',marginTop:'2%'}}>
            <Typography component="h1" variant="h6" sx={{textAlign: 'center',margin:'1%',color:'#111111'}} >Cadastre Autor</Typography>
            <Box component="form" sx={{display:'grid',justifyContent:'center'}} onSubmit={aoSubmeterForm}>
                <TextField
                value={nome}
                onChange={evento=> setNome(evento.target.value)}
                label="Nome"
                required
                margin="dense"
                />
                <TextField
                value={idade}
                onChange={evento=> setIdade(evento.target.value)}
                label="idade"
                type="number"
                fullWidth
                required
                margin="dense"
                />
                <Button sx={{marginTop: 1,marginBottom:"10%"}} type="submit"  fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
        </>
    );
};
export default CadastrarAutor