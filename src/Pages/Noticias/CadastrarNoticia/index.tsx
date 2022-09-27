import React from "react"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import Cabecalho from "../../../Components/Cabecalho"
import {useEffect, useState} from 'react'
import api from "../../../api"
import IAutor from "../../../interfaces/IAutor"

const CadastrarNoticia = ()=>{
    const [titulo, setTitulo] = useState('');
    const [conteudo,setConteudo]= useState('');
    const [autor,setAutor] = useState('');
    const [autores,setAutores]= useState<IAutor[]>([]);

    useEffect(()=>{
        api.get<IAutor[]>('autores/')
            .then(resposta=> setAutores(resposta.data));
    }, []);
    const dateJason = new Date().toJSON();
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault()
        api.request({
            url: 'cadastrar-noticia/',
            method: 'POST',
            data: {
                titulo: titulo,
                conteudo: conteudo,
                autor: autor,
                data_publicacao: dateJason
            }
        })
            .then(()=>{
                setTitulo('')
                setConteudo('')
                setAutor('')
                
                alert('Noticia cadastrada com sucesso')
            })
            .catch(erro => console.log(erro))
    }
    const date = new Date().toLocaleDateString();
    
    return(
        <>
        <Cabecalho />
        <Box sx={{marginLeft:'auto',marginRight:'auto', backgroundColor: '#bbb3b3',width:'40%',borderRadius:'10px',marginTop:'2%'}}>
            <Typography component={"h1"} variant={"h6"} sx={{textAlign: 'center',margin:'1%',color:'#111111'}} >Cadastre sua Noticia</Typography>
            <Box component="form" sx={{display:'grid',justifyContent:'center'}} onSubmit={aoSubmeterForm}>
                <TextField
                value={titulo}
                onChange={evento=> setTitulo(evento.target.value)}
                label="Titulo da noticia"
                required
                margin="dense"
                />
                <TextField
                value={conteudo}
                onChange={evento=> setConteudo(evento.target.value)}
                label="Conteudo da noticia"
                required
                margin="dense"
                />
                <TextField
                value={date}
                label="Data de publicação"
                margin="dense"
                />
                
                <FormControl margin="dense" fullWidth>
                    <InputLabel id="select-autor">Autor</InputLabel>
                    <Select labelId="select-autor" value={autor} onChange={evento=> setAutor(evento.target.value)}>
                        {autores.map(item => <MenuItem key={item._id} value={item._id}>
                            {item.nome}
                        </MenuItem>)}
                    </Select>
                </FormControl>
                <Button sx={{marginTop: 1}} type="submit"  fullWidth variant="outlined" >Cadastrar Noticia</Button>
            </Box>
        </Box>
        </>
    );
};
export default CadastrarNoticia;