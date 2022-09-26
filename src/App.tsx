import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css"
import CadastrarAutor from './Pages/Autor/CadastrarAutor';
import CadastrarNoticia from './Pages/Noticias/CadastrarNoticia';
import PageErro404 from './Pages/Erro404';
import Home from './Pages/Home';
import EditarAutor from './Pages/Autor/VizualizarAutor';
import AtualizarAutor from './Pages/Autor/AutalizarAutor';
import VizualizarNoticia from './Pages/Noticias/VizualizarNoticia';
import AtualizarNoticia from './Pages/Noticias/EditarNoticia';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      
      <Route path='/cadastrar-noticia' element={<CadastrarNoticia/>} />
      
      <Route path='/cadastrar-autor' element={<CadastrarAutor/>} />

      <Route path='/autores' element={<EditarAutor/>} />

      <Route path='/noticias' element={<VizualizarNoticia/>} />

      <Route path='/editar-autor/:id' element={<AtualizarAutor/>}/>

      <Route path='/editar-noticia/:id' element={<AtualizarNoticia/>}/>

      <Route path='*'  element={<PageErro404/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
