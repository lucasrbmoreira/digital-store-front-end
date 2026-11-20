import ProductCard from './ProductCard';

const ProductListing = ({ products = [] }) => {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard
          key={product.id ?? index}
          product={product}
          id={product.id ?? index + 1}
          image={product.images?.[0]?.content ?? product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.price_with_discount ?? product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;