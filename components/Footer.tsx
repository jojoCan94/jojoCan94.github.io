const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="col-sm copyright">✍️ with ❤️ by Me</div>
        <div className="col-sm social-icons">
          Theme inspired by{' '}
          <a href="https://github.com/saadpasta/developerFolio" target="_blank" rel="noopener noreferrer">
            developerFolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
