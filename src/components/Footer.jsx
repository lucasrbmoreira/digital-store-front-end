import { Link } from 'react-router-dom';
import Logo from './Logo';

const FooterInfo = ({ title, informations }) => {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {informations.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const infoInstitucional = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Segurança', link: '/security' },
    { text: 'Wishlist', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/careers' },
    { text: 'Meus Pedidos', link: '/orders' }
  ];

  const infoCategorias = [
    { text: 'Camisetas', link: '/products?filter=camisetas' },
    { text: 'Calças', link: '/products?filter=calcas' },
    { text: 'Bonés', link: '/products?filter=bones' },
    { text: 'Headphones', link: '/products?filter=headphones' },
    { text: 'Tênis', link: '/products?filter=tenis' }
  ];

  const infoContato = [
    { text: 'Av. Santos Dumont, 1510 - Fortaleza, CE', link: '/contact' },
    { text: '(85) 3051-3411', link: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Logo white />
          <p className="footer-description">
            Loja virtual especializada em calçados, vestuário e acessórios esportivos com entrega rápida para todo o Brasil.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>

        <FooterInfo informations={infoInstitucional} title="Informação" />
        <FooterInfo informations={infoCategorias} title="Categorias" />
        <FooterInfo informations={infoContato} title="Contato" />
      </div>

      <hr className="footer-divider" />
      <p className="footer-bottom">© {new Date().getFullYear()} Digital Store</p>
    </footer>
  );
};

export default Footer;