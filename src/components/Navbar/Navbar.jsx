import './Navbar.css';

export default function Navbar() {
  const appleLogoSrc = 'https://res.cloudinary.com/drxoionjq/image/upload/v1775068245/apple-logo_den5de.png';
  const hamburgerIconSrc = 'https://res.cloudinary.com/drxoionjq/image/upload/q_auto/f_auto/v1775068244/hamburger_puidic.png';
  const searchIconSrc = 'https://res.cloudinary.com/drxoionjq/image/upload/q_auto/f_auto/v1775068245/search_axp0eh.png';
  const bagIconSrc = 'https://res.cloudinary.com/drxoionjq/image/upload/q_auto/f_auto/v1775068244/bag_tfbs1u.png';

  const navItems = [
    {
      label: 'Store',
      primaryHeading: 'Shop',
      primaryLinks: ['Shop the Latest', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'AirPods', 'Accessories'],
      quickLinks: ['Find a Store', 'Order Status', 'Apple Trade In', 'Financing', 'Personal Setup'],
      specialLinks: ['Certified Refurbished', 'Education', 'Business', 'Veterans and Military', 'Government'],
    },
    {
      label: 'Mac',
      primaryHeading: 'Explore Mac',
      primaryLinks: ['Explore All Mac', 'MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini', 'Mac Studio', 'Mac Pro', 'Displays'],
      quickLinks: ['Compare Mac', 'Switch from PC to Mac', 'Accessories', 'AppleCare+ for Mac'],
      specialLinks: ['Shop Mac', 'Mac for College', 'Mac for Business', 'Help Me Choose'],
    },
    {
      label: 'iPhone',
      primaryHeading: 'Explore iPhone',
      primaryLinks: ['Explore All iPhone', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 15', 'Compare iPhone', 'Switch to iPhone'],
      quickLinks: ['iPhone Support', 'Accessories', 'AppleCare+ for iPhone', 'Carrier Deals'],
      specialLinks: ['Shop iPhone', 'Trade In', 'Move to iOS', 'Business'],
    },
    {
      label: 'iPad',
      primaryHeading: 'Explore iPad',
      primaryLinks: ['Explore All iPad', 'iPad Pro', 'iPad Air', 'iPad', 'iPad mini', 'Apple Pencil', 'Keyboards'],
      quickLinks: ['Compare iPad', 'iPad Support', 'Accessories', 'AppleCare+ for iPad'],
      specialLinks: ['Shop iPad', 'Education', 'Business', 'Help Me Choose'],
    },
    {
      label: 'Watch',
      primaryHeading: 'Explore Watch',
      primaryLinks: ['Explore All Apple Watch', 'Apple Watch Series', 'Apple Watch Ultra', 'Apple Watch SE', 'Bands', 'Apple Watch Studio'],
      quickLinks: ['Compare Watch', 'Watch Support', 'Accessories', 'AppleCare+ for Watch'],
      specialLinks: ['Shop Watch', 'Fitness+', 'Business', 'Family Setup'],
    },
    {
      label: 'AirPods',
      primaryHeading: 'Explore AirPods',
      primaryLinks: ['Explore All AirPods', 'AirPods Pro', 'AirPods', 'AirPods Max', 'Compare AirPods'],
      quickLinks: ['Audio Accessibility', 'AirPods Support', 'Apple Music', 'Accessories'],
      specialLinks: ['Shop AirPods', 'AppleCare+ for Headphones', 'Business', 'Gift Cards'],
    },
    {
      label: 'TV & Home',
      primaryHeading: 'Explore TV & Home',
      primaryLinks: ['Explore TV & Home', 'Apple TV 4K', 'HomePod', 'HomePod mini', 'Smart Home Accessories'],
      quickLinks: ['TV & Home Support', 'Home App', 'Apple TV App', 'Accessories'],
      specialLinks: ['Shop TV & Home', 'Bundle with Apple One', 'Business', 'Gift Ideas'],
    },
    {
      label: 'Entertainment',
      primaryHeading: 'Explore Entertainment',
      primaryLinks: ['Apple Music', 'Apple TV+', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books'],
      quickLinks: ['Manage Subscriptions', 'Family Sharing', 'Services Support', 'Free Trials'],
      specialLinks: ['Gift Cards', 'Apple One', 'Student Plan', 'Business'],
    },
    {
      label: 'Accessories',
      primaryHeading: 'Shop Accessories',
      primaryLinks: ['Shop All Accessories', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'AirPods', 'Home'],
      quickLinks: ['Made by Apple', 'Beats', 'Cases and Protection', 'Charging Essentials'],
      specialLinks: ['Gift Guide', 'New Arrivals', 'Top Rated', 'Business'],
    },
    {
      label: 'Support',
      primaryHeading: 'Support',
      primaryLinks: ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV'],
      quickLinks: ['Support Home', 'Forgot Password', 'Repair', 'Contact Support'],
      specialLinks: ['AppleCare+', 'Communities', 'System Status', 'Accessibility'],
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="#" className="navbar-logo" aria-label="Apple">
            <img
              src={appleLogoSrc}
              alt="Apple"
              className="navbar-logo-image"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                const fallback = event.currentTarget.nextElementSibling;
                if (fallback) {
                  fallback.style.display = 'inline';
                }
              }}
            />
            <span className="navbar-logo-fallback"></span>
          </a>
        </div>
        
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.label} className="navbar-menu-item">
              <a href="#">{item.label}</a>
              <div className="navbar-dropdown" role="menu" aria-label={`${item.label} menu`}>
                <div className="navbar-dropdown-inner">
                  <div className="navbar-dropdown-primary">
                    <p className="navbar-dropdown-title">{item.primaryHeading}</p>
                    <ul>
                      {item.primaryLinks.map((link) => (
                        <li key={link}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="navbar-dropdown-column">
                    <p className="navbar-dropdown-title">Quick Links</p>
                    <ul>
                      {item.quickLinks.map((link) => (
                        <li key={link}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="navbar-dropdown-column">
                    <p className="navbar-dropdown-title">Shop Special Stores</p>
                    <ul>
                      {item.specialLinks.map((link) => (
                        <li key={link}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <a href="#" className="navbar-icon" aria-label="Search">
            <img src={searchIconSrc} alt="Search" className="navbar-icon-image navbar-icon-search" />
          </a>
          <a href="#" className="navbar-icon" aria-label="Bag">
            <img src={bagIconSrc} alt="Bag" className="navbar-icon-image navbar-icon-bag" />
          </a>
          <button type="button" className="navbar-hamburger" aria-label="Open navigation menu">
            <img src={hamburgerIconSrc} alt="" className="navbar-hamburger-image" />
          </button>
        </div>
      </div>
    </nav>
  );
}
