import React from "react"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import Cabecalho from "../../Components/Cabecalho"
import {useEffect, useState} from 'react'
import api from "./../../api"
import IAutor from "../../interfaces/IAutor"

const CadastrarNoticia = ()=>{
    const [titulo, setTitulo] = useState('');
    const [conteudo,setConteudo]= useState('');
    const [autor,setAutor] = useState('');
    const [autores,setAutores]= useState<IAutor[]>([]);
    const [data_publicacao, setData_publicacao]= useState('');
    
    useEffect(()=>{
        api.get<IAutor[]>('autores/')
            .then(resposta=> setAutores(resposta.data))
    }, []);
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>)=>{
        evento.preventDefault()
        const formData = new FormData();

        formData.append('titulo', titulo);
        formData.append('conteudo',conteudo);
        formData.append('autor',autor);
        formData.append('data',data_publicacao);
       
        alert(titulo+conteudo+data_publicacao+autor)
        api.request({
            url: 'cadastrar-noticia/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(()=>{
                setTitulo('')
                setConteudo('')
                setAutor('')
                setData_publicacao('')
                
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
                value={data_publicacao}
                onChange={evento=> setData_publicacao(evento.target.value)}
                label="Data de publicação"
                margin="dense"
                />
                
                <FormControl margin="dense" fullWidth>
                    <InputLabel id="select-autor">Autor</InputLabel>
                    <Select labelId="select-autor" value={autor} onChange={evento=> setAutor(evento.target.value)}>
                        {autores.map(item => <MenuItem  value={item.nome}>
                            <option value={item.id}>{item.nome}</option>
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