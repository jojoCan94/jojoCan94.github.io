import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from '../lib/i18n';
import { SUPPORTED_LOCALES, type Locale } from '../lib/messages';
import { useEffect, useState } from 'react';

type NavLinkKey = 'skills' | 'experiences' | 'projects' | 'contacts';

type NavLink = {
  href: string;
  icon: string;
  labelKey: NavLinkKey;
};

const NAV_LINKS: NavLink[] = [
  { href: '#skills', icon: 'fas fa-code', labelKey: 'skills' },
  { href: '#experiences', icon: 'fas fa-briefcase', labelKey: 'experiences' },
  { href: '#projects', icon: 'fas fa-laptop-code', labelKey: 'projects' },
  { href: '#contact-me', icon: 'fas fa-envelope', labelKey: 'contacts' },
];

const Header = (): JSX.Element => {
  const router = useRouter();
  const { asPath, locale, locales } = router;
  const { brand, brandMobile, links, language } = useTranslations('Header');
  const [brandTitle, setBrandTitle] = useState(brand);
  const availableLocales = (locales ?? SUPPORTED_LOCALES).filter((availableLocale): availableLocale is Locale =>
    SUPPORTED_LOCALES.includes(availableLocale as Locale),
  );

    useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateTitle = (matches: boolean) => {
      setBrandTitle(matches ? brandMobile : brand);
    };

    updateTitle(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      updateTitle(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [brand, brandMobile]);

  return (
    <header id="header" className="header-main">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {brandTitle}
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
                    <i className={link.icon} /> {links[link.labelKey]}
                  </a>
                </li>
              ))}
              {availableLocales.map((availableLocale) => (
                <li className="nav-item" key={availableLocale}>
                  <Link
                    href={asPath}
                    locale={availableLocale}
                    className={`nav-link text-center text-xxl-h3 text-xl-h4 text-lg-h5 text-sm-h6 ${
                      availableLocale === locale ? 'active' : ''
                    }`}
                  >
                    {language[availableLocale] ?? availableLocale.toUpperCase()}
                  </Link>
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
