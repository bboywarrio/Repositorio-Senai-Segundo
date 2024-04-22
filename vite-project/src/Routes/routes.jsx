import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Aplicativo from '../Pages/aplicativo/aplicativo';
import Contato from '../Pages/Contato/Contato';
import Politica from '../Pages/politica-envios/politica-envios';
import Produtos from '../Pages/Produto/Produto'; // Importe a página de produtos
import Carrinho from '../Pages/Carrinho'; // Importe a página de carrinho

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aplicativo" element={<Aplicativo />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politica-de-envios" element={<Politica />} />
        <Route path="/produtos" element={<Produtos />} /> 
        <Route path="/carrinho" element={<Carrinho />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
