import { useTranslations } from '../lib/i18n';

const Greeting = (): JSX.Element => {
  const { title, intro, skills, resumeCta, resumeUrl, contactCta, contactEmail } = useTranslations('Greeting');

  return (
    <div className="greeting-main text-white">
      <div className="row flex-lg-row flex-column justify-content-lg-start justify-content-center">
        <div className="col-md-8">
          <h1
            className="greeting-title display-1 text-lg text-md text-sm fw-bold mb-4"
            style={{ fontSize: 'calc(1.625rem + 2vw)' }}
          >
            {title} <span className="wave">👋</span>
          </h1>
          <p className="greeting-text lead mb-4" style={{ fontSize: '1.25rem', marginTop: '1rem', width: '100%' }}>
            {intro}
          </p>

          <p className="skills-text lead mb-4" style={{ fontSize: '1.25rem', marginTop: '1rem', width: '100%' }}>
            {skills}
          </p>

          <div className="social-media-div mb-4">
            <a
              href="https://github.com/jojoCan94"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-icons me-2"
            >
              <img src="/assets/svg/github.png" alt="github" style={{ maxHeight: '30px', maxWidth: '30px' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathancannizzaro/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-icons me-2"
            >
              <img src="/assets/svg/linkedin.png" alt="linkedin" style={{ maxHeight: '30px', maxWidth: '30px' }} />
            </a>
            <a
              href="mailto:jojo.can.94@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-icons"
            >
              <img src="/assets/svg/email.png" alt="mail" style={{ maxHeight: '30px', maxWidth: '30px' }} />
            </a>
          </div>
          <div className="button-presentation mb-4">
            <button className="btn-custom">
              <a href={resumeUrl} className="text-white">
                {resumeCta}
              </a>
            </button>

            <button className="btn-custom2">
              <a href={`mailto:${contactEmail}`} className="text-white">
                {contactCta}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
