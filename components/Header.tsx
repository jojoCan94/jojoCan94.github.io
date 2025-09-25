type NavLink = {
  href: string;
  icon: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: '#skills', icon: 'fas fa-code', label: 'Skills' },
  { href: '#experiences', icon: 'fas fa-briefcase', label: 'Works' },
  { href: '#projects', icon: 'fas fa-laptop-code', label: 'Projects' },
  { href: '#contact-me', icon: 'fas fa-envelope', label: 'Contacts' },
];

const Header = (): JSX.Element => {
  return (
    <header id="header" className="header-main">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-semibold" href="#greeting">
            Jonathan Cannizzaro
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a className="nav-link text-center text-xxl-h3 text-xl-h4 text-lg-h5 text-sm-h6" href={link.href}>
                    <i className={link.icon} /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
