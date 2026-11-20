const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  onBuy
}) => {
  const formatarValor = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  return (
    <div className="buy-box">
      <h1 className="buy-box-name">{name}</h1>
      {reference && <span className="buy-box-reference">Ref: {reference}</span>}

      {(stars !== undefined || rating !== undefined) && (
        <div className="buy-box-rating-row">
          {stars !== undefined && (
            <span className="buy-box-stars">
              {stars}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFFFFF">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
          )}
          {rating !== undefined && (
            <span className="buy-box-rating">({rating} avaliações)</span>
          )}
        </div>
      )}

      <div className="buy-box-prices">
        {priceDiscount ? (
          <>
            <span className="buy-box-price">{formatarValor(priceDiscount)}</span>
            <span className="buy-box-price-old">{formatarValor(price)}</span>
          </>
        ) : (
          <span className="buy-box-price">{formatarValor(price)}</span>
        )}
      </div>

      {description && (
        <div>
          <p className="buy-box-description-label">Descrição do produto</p>
          <p className="buy-box-description">{description}</p>
        </div>
      )}

      {children && <div className="buy-box-children">{children}</div>}

      <button type="button" className="buy-box-button" onClick={onBuy}>
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;