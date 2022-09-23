import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css"
import CadastrarAutor from './Pages/CadastrarAutor';
import CadastrarNoticia from './Pages/CadastrarNoticia';
import PageErro404 from './Pages/Erro404';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      
      <Route path='/cadastrar-noticia' element={<CadastrarNoticia/>} />
      
      <Route path='/cadastrar-autor' element={<CadastrarAutor/>} />

      <Route path='*'  element={<PageErro404/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
