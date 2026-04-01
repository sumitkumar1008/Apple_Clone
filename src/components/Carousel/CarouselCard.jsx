import { forwardRef } from 'react';

const CarouselCard = forwardRef(function CarouselCard({ slide, isActive, onClick }, ref) {
  return (
    <article className={`carousel-card ${isActive ? 'is-active' : ''}`} ref={ref} onClick={onClick}>
      <div className={`carousel-card-image placeholder-${slide.tone}`} aria-label={`${slide.title} placeholder`} />
      <div className="carousel-card-content">
        <h3>{slide.title}</h3>
        <p>{slide.subtitle}</p>
        <a href="#">{slide.cta}</a>
      </div>
    </article>
  );
});

export default CarouselCard;
