import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import { useCart } from '../../context/CartContext';
import '../Carrinho';

function Carrinho() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Importa cartItems e funções do contexto

  // Função para calcular o total do carrinho
  const calcularTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.valor * item.quantity; // Multiplica o valor do produto pela quantidade e adiciona ao total
    });
    return total.toFixed(2); // Retorna o total com duas casas decimais
  };

  return (
    <div className="carrinho-container">
      <h2>Produtos no Carrinho</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Carrinho vazio, você pode realizar compras acessando nossa página de produtos!</p>
          <Link to="/produtos" className="btn-adicionar-produtos">Adicionar Produtos</Link>
        </div>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.nome} />
                <p>{item.nome}</p>
                <p>Preço: R$ {item.valor}</p>
                <p>Quantidade: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Excluir</button>
              </div>
            ))}
          </div>
          <div className="total-carrinho">
            <p>Total do Carrinho: R$ {calcularTotal()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
