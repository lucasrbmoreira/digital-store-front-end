import { Link } from 'react-router-dom';
import { resolveImageUrl } from '../services/api';

const ProductCard = ({ product, id, name, image, price, priceDiscount }) => {
  const productId = product?.id ?? id;
  const productName = product?.name ?? name;
  const rawImage = product?.images?.[0]?.content ?? image;
  const originalPrice = Number(product?.price ?? price ?? 0);
  const discountPrice = Number(product?.price_with_discount ?? priceDiscount ?? originalPrice);
  const hasDiscount = discountPrice > 0 && discountPrice < originalPrice;

  const formatCurrency = (value) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <Link to={`/product/${productId}`} className="product-card">
      <div className="product-card-image-box">
        <img
          src={resolveImageUrl(rawImage)}
          alt={productName}
          className="product-card-image"
        />
      </div>

      <p className="product-card-name">{productName}</p>

      <div className="product-card-prices">
        {hasDiscount ? (
          <>
            <span className="product-card-price has-discount">
              {formatCurrency(originalPrice)}
            </span>
            <span className="product-card-discount">
              {formatCurrency(discountPrice)}
            </span>
          </>
        ) : (
          <span className="product-card-price">
            {formatCurrency(originalPrice)}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;