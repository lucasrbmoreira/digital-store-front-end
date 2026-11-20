import { useEffect, useState } from 'react';
import Layout from './Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { getProducts } from '../services/api';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts({ limit: 8 })
      .then((response) => {
        setProducts(response.data || []);
      })
      .catch((error) => {
        console.error('Erro ao carregar produtos em destaque:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Section title="Produtos em alta" titleAlign="left">
        {loading ? (
          <p>A carregar produtos...</p>
        ) : (
          <ProductListing products={products} />
        )}
      </Section>
    </Layout>
  );
};

export default HomePage;