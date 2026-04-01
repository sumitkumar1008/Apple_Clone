import './Footer.css';

const footerColumns = [
  {
    title: 'Shop and Learn',
    links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
    subTitle: 'Apple Wallet',
    subLinks: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
  },
  {
    title: 'Account',
    links: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'],
    subTitle: 'Entertainment',
    subLinks: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'],
  },
  {
    title: 'Apple Store',
    links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help'],
  },
  {
    title: 'For Business',
    links: ['Apple and Business', 'Shop for Business'],
    subTitle: 'For Education',
    subLinks: ['Apple and Education', 'Shop for K-12', 'Shop for College'],
    subTitle2: 'For Healthcare',
    subLinks2: ['Apple and Healthcare'],
    subTitle3: 'For Government',
    subLinks3: ['Apple and Government', 'Shop for Veterans and Military', 'Shop for State and Local Employees', 'Shop for Federal Employees'],
  },
  {
    title: 'Apple Values',
    links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain Innovation'],
    subTitle: 'About Apple',
    subLinks: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
  },
];

export default function Footer() {
  return (
    <footer className="apple-footer">
      <div className="apple-footer-inner">
        <div className="footer-legal">
          <p>
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card.
            Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card.
          </p>
          <p>
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only
            for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA.
          </p>
          <p>
            Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
          </p>
          <p>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</p>
        </div>

        <div className="footer-rule" />

        <div className="footer-grid">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>

              {column.subTitle ? <h4>{column.subTitle}</h4> : null}
              {column.subLinks ? (
                <ul>
                  {column.subLinks.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              ) : null}

              {column.subTitle2 ? <h4>{column.subTitle2}</h4> : null}
              {column.subLinks2 ? (
                <ul>
                  {column.subLinks2.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              ) : null}

              {column.subTitle3 ? <h4>{column.subTitle3}</h4> : null}
              {column.subLinks3 ? (
                <ul>
                  {column.subLinks3.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
