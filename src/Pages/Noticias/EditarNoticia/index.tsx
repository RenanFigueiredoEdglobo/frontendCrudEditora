import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, TextField, Typography, FormControl, Select,InputLabel,MenuItem } from "@mui/material";
import api from "../../../api";
import Cabecalho from "../../../Components/Cabecalho";
import IAutor from "../../../interfaces/IAutor";
import INoticias from "../../../interfaces/INoticias";

const AtualizarNoticia = ()=>{
    const parametros = useParams();
    const [titulo, setTitulo] = useState('');
    const [conteudo,setConteudo]= useState('');
    const [autor,setAutor] = useState('');
    const [autores,SetAutores]=useState<IAutor[]>([]);
    const [data_publicacao, setData_publicacao]= useState(''); 
    useEffect(()=>{
        api.get<IAutor[]>('autores/')
            .then(resposta=> SetAutores(resposta.data));
    }, []);
    useEffect(()=>{
        if(parametros.id){
            api.get<INoticias>(`atualizar-noticia/${parametros.id}`)
            .then(resposta => setTitulo(resposta.data.titulo))
        }
    },[parametros]);
    const aoSubmeterForm = ( evento: React.FormEvent<HTMLFormElement>)=>{
        
        if(parametros.id){
            api.put(`atualizar-noticia/${parametros.id}`,{
                titulo: titulo,
                conteudo: conteudo,
                autor: autor,
                data_publicacao: data_publicacao
            })
            .then(()=>{
                alert("Noticia atualizada com sucesso");
                window.open("/noticias");
            })
        }else{
            api.post('cadastrar-noticia/',{
                titulo: titulo,
                conteudo: conteudo,
                autor: autor,
                data_publicacao: data_publicacao
            })
            .then(()=>{
                alert("Noticia cadastrada");
                window.open("/noticias");
            })
        }

    }
    return(
        <>
        <Cabecalho />
        <Box sx={{marginLeft:'auto',marginRight:'auto', backgroundColor: '#bbb3b3',width:'40%',borderRadius:'10px',marginTop:'2%'}}>
            <Typography component={"h1"} variant={"h6"} sx={{textAlign: 'center',margin:'1%',color:'#111111'}} >Cadastre sua Noticia</Typography>
            <Box component="form" sx={{display:'grid',justifyContent:'center'}} onSubmit={aoSubmeterForm}>
                <TextField
                value={titulo}
                onChange={evento=> setTitulo(evento.target.value)}
                label="Titulo da Noticia"
                fullWidth
                required
                />
                <TextField
                value={conteudo}
                onChange={evento=> setConteudo(evento.target.value)}
                label="Conteudo"
                fullWidth
                required
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
}
export default AtualizarNoticia;