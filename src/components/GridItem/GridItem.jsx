import './GridItem.css';

export default function GridItem({
  title,
  subtitle,
  note,
  image,
  dark = false,
  variant = 'default',
  ctaText,
  secondaryCtaText,
  ctaMode = 'text',
  imageFirst = false,
  buttonBeforeDescription = false,
}) {
  const finalCtaText = ctaText || (title === '50 Years of Thinking Different' ? 'Read the letter' : 'Learn more');

  return (
    <div className={`grid-item grid-item-${variant} ${dark ? 'dark' : ''} ${imageFirst ? 'grid-item--image-first' : ''}`}>
      <img src={image} alt={title} className="grid-item-image" />
      <div className="grid-item-content">
        {title ? <h2>{title}</h2> : null}
        {buttonBeforeDescription ? (
          <>
            <div className="grid-item-cta-wrap">
              <a href="#" className={`grid-item-link ${ctaMode === 'pill' ? 'grid-item-link-pill' : ''}`}>
                {finalCtaText}
                {ctaMode === 'text' ? ' ->' : ''}
              </a>
              {secondaryCtaText ? (
                <a href="#" className={`grid-item-link ${ctaMode === 'pill' ? 'grid-item-link-pill grid-item-link-pill-secondary' : ''}`}>
                  {secondaryCtaText}
                </a>
              ) : null}
            </div>
            {subtitle ? <p>{subtitle}</p> : null}
            {note ? <span className="grid-item-note">{note}</span> : null}
          </>
        ) : (
          <>
            {subtitle ? <p>{subtitle}</p> : null}
            {note ? <span className="grid-item-note">{note}</span> : null}
            <div className="grid-item-cta-wrap">
              <a href="#" className={`grid-item-link ${ctaMode === 'pill' ? 'grid-item-link-pill' : ''}`}>
                {finalCtaText}
                {ctaMode === 'text' ? ' ->' : ''}
              </a>
              {secondaryCtaText ? (
                <a href="#" className={`grid-item-link ${ctaMode === 'pill' ? 'grid-item-link-pill grid-item-link-pill-secondary' : ''}`}>
                  {secondaryCtaText}
                </a>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
