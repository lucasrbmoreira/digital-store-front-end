import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header/>
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;