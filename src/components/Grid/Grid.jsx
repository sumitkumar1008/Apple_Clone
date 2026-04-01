import GridItem from '../GridItem/GridItem';
import './Grid.css';

export default function Grid() {
  return (
    <section className="grid">
      <GridItem
        title="50 Years of"
        subtitle="Thinking Different."
        image="https://www.apple.com/v/home/cm/images/promos/apple-50/promo_apple_50__cb3xo5si7y6a_medium.jpg"
        variant="apple50"
        ctaText="Read the letter from Tim"
        ctaMode="pill"
      />

      <GridItem
        title=""
        subtitle="Apple Worldwide Developers Conference. Join us online June 8-12."
        dark
        image="https://www.apple.com/v/home/cm/images/promos/wwdc26-announce/promo_wwdc26_announce__b74q051bn5ki_medium_2x.jpg"
        variant="wwdc"
        ctaText="Learn more"
        ctaMode="pill"
      />

      <GridItem
        title="AirPods Max 2"
        subtitle="Listening, Remastered."
        note="Available early next month"
        image="https://www.apple.com/v/home/cm/images/promos/airpods-max-2/promo_airpods_max_2_announce__gixce23ubaa2_medium_2x.jpg"
        variant="airpods"
        ctaText="Learn more"
        secondaryCtaText="Order"
        ctaMode="pill"
      />

      <GridItem
        title="APPLE WATCH SERIES 11"
        subtitle="The ultimate way to watch your health."
        image="https://www.apple.com/v/home/cm/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b63hxviqvonm_medium_2x.jpg"
        variant="watch"
        ctaText="Learn more"
        secondaryCtaText="Buy"
        ctaMode="pill"
      />

      <GridItem
        title="Apple Trade In"
        subtitle="Get up to $195-$685 in credit when you trade in iPhone 13 or higher."
        image="https://www.apple.com/v/home/cm/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg"
        variant="tradein"
        ctaText="Get your estimate"
        ctaMode="pill"
      />

      <GridItem
        title="Apple Card"
        subtitle="Get up to 3% Daily Cash back with every purchase."
        image="https://www.apple.com/v/home/cm/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium_2x.jpg"
        variant="card"
        ctaText="Learn more"
        secondaryCtaText="Apply now"
        ctaMode="pill"
      />
    </section>
  );
}
