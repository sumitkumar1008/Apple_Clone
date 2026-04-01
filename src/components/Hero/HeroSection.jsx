import './HeroSection.css';

export default function HeroSection({
  title,
  titleText,
  subtitle,
  image,
  variant = 'light',
  sectionClass = '',
  primaryCta = 'Learn more',
  secondaryCta = 'Buy',
}) {
  const imageAlt = titleText || (typeof title === 'string' ? title : 'Product image');

  return (
    <section className={`hero hero-${variant} ${sectionClass}`.trim()}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-links">
          <a href="#" className="btn-primary">{primaryCta}</a>
          <a href="#" className="btn-outline">{secondaryCta}</a>
        </div>
      </div>
      <img src={image} alt={imageAlt} className="hero-image" />
    </section>
  );
}
