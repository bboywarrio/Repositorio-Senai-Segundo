import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Produto.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Produtos() {
  const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos
  const { addToCart } = useCart(); // Importa a função addToCart do contexto

  useEffect(() => {
    // Função para buscar os produtos usando Axios
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/db.json'); // Faz a requisição para obter os produtos
        setProdutos(response.data.produtos); // Atualiza o estado com os produtos obtidos
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };

    fetchProducts(); // Chama a função para buscar os produtos ao iniciar o componente
  }, []);

  return (
    <div className="produtos-container">
      <h2>Produtos Disponíveis</h2>
      <div className="featured_products">
        {produtos && produtos.length > 0 ? (
          produtos.map((produto) => (
            <div key={produto.id} className="card-container">
              <div className="container-item-home">
                <img src={produto.img} alt={produto.nome} className="img-card" />
                <h3 className="title_card">{produto.nome}</h3>
                <p className="description_card">Preço: R$ {produto.valor}</p>
                <button className="btn outline" onClick={() => addToCart(produto)}>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
        <Link to="/carrinho">
          <button className="btn">Ver Carrinho</button>
        </Link>
      </div>
    </div>
  );
}

export default Produtos;
