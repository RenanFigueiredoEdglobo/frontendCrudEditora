import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import IAutor from "../../../interfaces/IAutor"
import api from "../../../api"
import { Link as RouterLink } from 'react-router-dom'
import Cabecalho from "../../../Components/Cabecalho"
const EditarAutor = () =>{
   
 const [autores, setAutores]= useState<IAutor[]>([]);
    
    useEffect(()=>{
        api.get<IAutor[]>('autores/')
            .then(resposta => setAutores(resposta.data));
    },[])
    const excluir = (AutorAhSerExcluirdo: IAutor)=>{
        api.delete(`excluir-autor/${AutorAhSerExcluirdo._id}/`);
        window.location.reload();
    }
    return(
        <>
        <Cabecalho />
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Idade
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {autores.map(item => <TableRow key={item._id} >
                        <TableCell>
                            {item.nome}
                        </TableCell>
                        <TableCell>
                            {item.idade}
                        </TableCell>
                        <TableCell>
                           [ <RouterLink to={`/editar-autor/${item._id}`}>Editar</RouterLink>]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined"color="error" onClick={()=> excluir(item)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
export default EditarAutor;