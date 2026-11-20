import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import ProductOptions from '../components/ProductOptions';
import { getProductById, resolveImageUrl } from '../services/api';

const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error('Erro ao carregar produto:', error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="product-view-container">
          <p>Carregando detalhes do produto...</p>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="product-view-container">
          <p>Produto não encontrado.</p>
        </div>
      </Layout>
    );
  }

  const galleryImages = (product.images || []).map((img) => ({
    src: resolveImageUrl(img.content)
  }));

  const originalPrice = Number(product.price || 0);
  const discountPrice = Number(product.price_with_discount || originalPrice);
  const hasDiscount = discountPrice > 0 && discountPrice < originalPrice;

  const formatCurrency = (value) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <Layout>
      <div className="product-view-container">
        <div className="product-view-top">
          <div className="product-view-gallery">
            <Gallery
              images={galleryImages}
              showThumbs
              width="700px"
              height="570px"
              radius="4px"
            />
          </div>

          <div className="product-view-info">
            <div className="buy-box">
              <h1 className="buy-box-name">{product.name}</h1>
              <span className="buy-box-reference">
                Casual | Nike | REF:{String(product.id).padStart(6, '0')}
              </span>

              <div className="buy-box-rating-row">
                <span className="buy-box-stars">4.7 ★</span>
                <span className="buy-box-rating">(90 avaliações)</span>
              </div>

              <div className="buy-box-prices">
                <span className="buy-box-price">
                  {formatCurrency(hasDiscount ? discountPrice : originalPrice)}
                </span>
                {hasDiscount && (
                  <span className="buy-box-price-old">
                    {formatCurrency(originalPrice)}
                  </span>
                )}
              </div>

              <span className="buy-box-description-label">
                Descrição do produto
              </span>
              <p className="buy-box-description">{product.description}</p>

              <div className="buy-box-children">
                {(product.options || []).map((opt) => (
                  <div key={opt.id}>
                    <span className="option-group-label">{opt.title}</span>
                    <ProductOptions
                      options={opt.values}
                      shape={opt.shape}
                      radius={`${opt.radius}px`}
                      type={opt.type}
                    />
                  </div>
                ))}
              </div>

              <button type="button" className="buy-box-button">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductViewPage;