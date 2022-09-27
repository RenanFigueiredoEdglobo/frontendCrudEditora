import { Button, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import IAutor from "../../../interfaces/IAutor"
import { Link as RouterLink } from 'react-router-dom'
import Cabecalho from "../../../Components/Cabecalho"
import INoticias from "../../../interfaces/INoticias"
import api from "../../../api"
const VizualizarNoticia = () => {
    const [noticias, setNoticias] = useState<INoticias[]>([]); 
    const [autores, setAutores] = useState<IAutor[]>([])
    const [autor, setAutor] = useState('')
    const [data_publicacao, setDataPublicacao] = useState('')
    useEffect(() => {
        api.get<INoticias[]>('noticias/')
            .then(resposta => setNoticias(resposta.data));
        api.get<{ autores: IAutor[] }>('autores/')
            .then(resposta => setAutores(resposta.data.autores))
    })
    const excluir = (NoticiAhSerExcuido: INoticias) => {
        api.delete(`excluir-noticia/${NoticiAhSerExcuido._id}`);
        window.location.reload();
    }
    return (
        <>
            <Cabecalho />
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Titulo
                            </TableCell>
                            <TableCell>
                                Conteudo
                            </TableCell>

                            <TableCell>
                                Ultima Atualização
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
                        {noticias.map(item => <TableRow key={item._id}>
                            <TableCell>
                                {item.titulo}
                            </TableCell>
                            <TableCell>
                                {item.conteudo}
                            </TableCell>

                            <TableCell>
                                {item.data_publicacao.toString()}
                            </TableCell>
                            <TableCell>
                                [ <RouterLink to={`/editar-noticia/${item._id}`}>Editar</RouterLink> ]
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined" color="error" onClick={() => excluir(item)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>)}
                    </TableBody>

                </Table>
            </TableContainer>

        </>
    );
};
export default VizualizarNoticia