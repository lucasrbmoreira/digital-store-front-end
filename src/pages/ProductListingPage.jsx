import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { getCategories, getProducts } from '../services/api';

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  const searchTerm = searchParams.get('filter') || searchParams.get('match') || '';

  useEffect(() => {
    getCategories(false)
      .then((response) => setCategories(response.data || []))
      .catch((error) => console.error('Erro ao carregar categorias:', error));
  }, []);

  useEffect(() => {
    setLoading(true);

    const filters = { limit: 12 };
    if (searchTerm) filters.match = searchTerm;
    if (selectedCategories.length > 0) {
      filters.category_ids = selectedCategories.join(',');
    }

    getProducts(filters)
      .then((response) => {
        setProducts(response.data || []);
        setTotal(response.total || 0);
      })
      .catch((error) => console.error('Erro ao filtrar produtos:', error))
      .finally(() => setLoading(false));
  }, [searchTerm, selectedCategories]);

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'price-asc') {
      return Number(a.price_with_discount) - Number(b.price_with_discount);
    }
    if (sortOrder === 'price-desc') {
      return Number(b.price_with_discount) - Number(a.price_with_discount);
    }
    return 0;
  });

  return (
    <Layout>
      <div className="listing-page-container">
        <aside className="listing-sidebar">
          <div className="sort-box">
            <label htmlFor="sort-select" className="sort-label">
              Ordenar por
            </label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Mais relevantes</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
            </select>
          </div>

          <div className="filter-panel">
            <h3 className="filter-panel-title">Filtrar por</h3>
            <div className="filter-group">
              <span className="filter-group-title">Categoria</span>
              <div className="filter-group-list">
                {categories.map((cat) => (
                  <label key={cat.id} className="filter-group-item">
                    <input
                      type="checkbox"
                      className="filter-group-input"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => handleCategoryToggle(cat.id)}
                    />
                    {cat.name}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="listing-main">
          <Section
            title={
              searchTerm
                ? `Resultados para "${searchTerm}" - ${total} produtos`
                : `Produtos - ${total} encontrados`
            }
            titleAlign="left"
          >
            {loading ? (
              <p>Carregando catálogo...</p>
            ) : sortedProducts.length === 0 ? (
              <p>Nenhum produto encontrado.</p>
            ) : (
              <ProductListing products={sortedProducts} />
            )}
          </Section>
        </main>
      </div>
    </Layout>
  );
};

export default ProductListingPage;