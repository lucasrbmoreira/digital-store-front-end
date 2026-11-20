import { useState } from 'react';

const formatDimension = (value) => {
  if (!value) return undefined;
  return /^\d+$/.test(String(value)) ? `${value}px` : value;
};

const Gallery = ({
  className = '',
  width = '100%',
  height = '500px',
  radius = '0px',
  showThumbs = false,
  images = []
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  const formattedWidth = formatDimension(width);
  const formattedHeight = formatDimension(height);

  return (
    <div className={`gallery ${className}`.trim()} style={{ width: formattedWidth }}>
      <div
        className="gallery-viewport"
        style={{
          width: '100%',
          height: formattedHeight,
          borderRadius: radius
        }}
      >
        <div
          className="gallery-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((item, index) => (
            <div className="gallery-slide" key={index}>
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                style={{ borderRadius: radius }}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="gallery-arrow left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Imagem anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          className="gallery-arrow right"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          aria-label="Próxima imagem"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((item, index) => (
            <button
              type="button"
              key={index}
              className={`gallery-thumb-btn ${currentIndex === index ? 'active' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Selecionar miniatura ${index + 1}`}
            >
              <img
                src={item.src}
                alt={`Miniatura ${index + 1}`}
                style={{ borderRadius: radius }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;