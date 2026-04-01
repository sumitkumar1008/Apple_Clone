import { useEffect, useMemo, useRef, useState } from 'react';
import CarouselCard from './CarouselCard';
import './Carousel.css';

const slides = [
  {
    title: 'Shrinking',
    subtitle: 'Comedy - Getting it together. Together.',
    cta: 'Stream now',
    tone: 'aqua',
  },
  {
    title: 'Formula 1',
    subtitle: 'Live race coverage and highlights.',
    cta: 'Watch now',
    tone: 'sunset',
  },
  {
    title: 'MLS Season Pass',
    subtitle: 'Every club. Every match. No blackouts.',
    cta: 'Subscribe',
    tone: 'indigo',
  },
  {
    title: 'Severance',
    subtitle: 'Thriller - A different kind of work-life balance.',
    cta: 'Watch now',
    tone: 'graphite',
  },
  {
    title: 'Ted Lasso',
    subtitle: 'Feel-good comedy with heart.',
    cta: 'Play',
    tone: 'emerald',
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRefs = useRef([]);
  const trackRef = useRef(null);

  const totalSlides = slides.length;

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [isPaused, totalSlides]);

  useEffect(() => {
    const track = trackRef.current;
    const currentSlide = slideRefs.current[activeIndex];
    if (track && currentSlide) {
      const targetLeft = currentSlide.offsetLeft - (track.clientWidth - currentSlide.clientWidth) / 2;
      track.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }
  }, [activeIndex]);

  const progressText = useMemo(() => `${activeIndex + 1} / ${totalSlides}`, [activeIndex, totalSlides]);

  return (
    <section className="card-carousel" aria-label="Featured products carousel">
      <div className="card-carousel-inner">
        <div className="card-carousel-head">
          <h2>Endless entertainment.</h2>
          <p>{progressText}</p>
        </div>

        <div
          className="card-carousel-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="card-carousel-track" ref={trackRef}>
            {slides.map((slide, index) => (
              <CarouselCard
                key={slide.title}
                slide={slide}
                isActive={index === activeIndex}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
