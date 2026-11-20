import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { getCategories } from '../services/api';

const Header = () => {
  const [termoBusca, setTermoBusca] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleBusca = (event) => {
    event.preventDefault();
    const filtro = termoBusca.trim();
    if (filtro) {
      navigate(`/products?filter=${encodeURIComponent(filtro)}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <NavLink aria-label="Página inicial" to="/">
          <Logo/>
        </NavLink>

        <form className="search-form" onSubmit={handleBusca}>
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar produto..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
          <button type="submit" className="search-button" aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        <div className="header-actions">
          <Link className="register-link" to="/cadastro">
            Cadastre-se
          </Link>
          <Link className="login-button" to="/login">
            Entrar
          </Link>
          <div className="cart-icon" aria-label="Carrinho de compras">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <NavLink className="nav-link" end to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/products">
          Produtos
        </NavLink>
        <NavLink className="nav-link" to="/categories">
          Categorias
        </NavLink>
        <NavLink className="nav-link" to="/orders">
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;