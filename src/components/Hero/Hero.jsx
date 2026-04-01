import HeroSection from './HeroSection';
import './Hero.css';

export default function Hero() {
  return (
    <>
      <HeroSection
        title="iPhone"
        subtitle="Meet the latest iPhone lineup."
        image="https://www.apple.com/v/home/cm/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg"
        variant="light"
        sectionClass="hero-primary hero-iphone"
        secondaryCta="Shop iPhone"
      />

      <HeroSection
        title="MacBook Neo"
        subtitle="Amazing Mac. Surprising price."
        image="https://www.apple.com/v/home/cm/images/heroes/macbook-neo/hero_macbook_neo__gnm3snkti4a6_mediumtall_2x.jpg"
        variant="light"
        sectionClass="hero-overlay hero-macbook"
      />
      
      <HeroSection
        title={<><span>iPad </span><span className="hero-air-word">air</span></>}
        titleText="iPad Air"
        subtitle="Now supercharged by M4."
        image="https://www.apple.com/v/home/cm/images/heroes/ipad-air-m4/hero_ipad_air_m4__ew8k92mk1w6e_mediumtall_2x.jpg"
        variant="sky"
        sectionClass="hero-overlay hero-ipad"
      />
    </>
  );
}
