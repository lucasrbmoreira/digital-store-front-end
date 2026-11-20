import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/produto/:id" element={<ProductViewPage />} />
        <Route
          path="/categories"
          element={
            <Layout>
              <div className="section">
                <h2 className="section-title">Categorias</h2>
              </div>
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <div className="section">
                <h2 className="section-title">Meus Pedidos</h2>
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;