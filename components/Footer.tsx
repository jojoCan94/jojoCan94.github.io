import { useTranslations } from '../lib/i18n';

const Footer = (): JSX.Element => {
  const { crafted, themeCredit } = useTranslations('Footer');

  return (
    <footer className="footer">
      <div className="container">
        <div className="col-sm copyright">{crafted}</div>
        <div className="col-sm social-icons">
          {themeCredit}{' '}
          <a href="https://github.com/saadpasta/developerFolio" target="_blank" rel="noopener noreferrer">
            developerFolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
