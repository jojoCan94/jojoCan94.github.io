const Greeting = (): JSX.Element => {
  return (
    <div className="greeting-main text-white">
      <div className="row flex-lg-row flex-column justify-content-lg-start justify-content-center">
        <div className="col-md-8">
          <h1
            className="greeting-title display-1 text-lg text-md text-sm fw-bold mb-4"
            style={{ fontSize: 'calc(1.625rem + 2vw)' }}
          >
            Hi all, I&apos;m Jonathan <span className="wave">👋</span>
          </h1>
          <p className="greeting-text lead mb-4" style={{ fontSize: '1.25rem', marginTop: '1rem', width: '100%' }}>
            I am a Frontend Software Developer 🚀 focused on crafting reliable interfaces with JavaScript, React,
            TypeScript and Node.js. I collaborate with cross-functional teams to translate product goals into
            accessible user journeys and maintainable codebases.
          </p>

          <p className="skills-text lead mb-4" style={{ fontSize: '1.25rem', marginTop: '1rem', width: '100%' }}>
            My core skills include responsive design, design system implementation and performance optimization.
            Curiosity keeps me up-to-date with the latest frontend tooling so I can deliver polished experiences for
            both users and stakeholders.
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
            <a
              className="btn-custom text-white"
              href="http://drive.google.com/file/d/1eavvNPP9TE-ALrtxx7IPc1vQp0Lwonwg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              SEE MY RESUME
            </a>

            <a className="btn-custom2 text-white" href="mailto:jojo.can.94@gmail.com">
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
