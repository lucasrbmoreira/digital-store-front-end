import { Link } from 'react-router-dom';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  const isExternalLink = link?.href?.startsWith('http');

  return (
    <section className="section">
      <div className={`section-header ${titleAlign === 'center' ? 'center' : ''}`}>
        <h2 className="section-title">{title}</h2>

        {link && (
          isExternalLink ? (
            <a className="section-link" href={link.href} target="_blank" rel="noreferrer">
              {link.text}
            </a>
          ) : (
            <Link className="section-link" to={link.href}>
              {link.text}
            </Link>
          )
        )}
      </div>

      {children}
    </section>
  );
};

export default Section;