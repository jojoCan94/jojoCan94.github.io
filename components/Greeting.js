export default function Greeting() {
  return (
    <div className="greeting-main text-white">
      <div className="row flex-lg-row flex-column justify-content-lg-start justify-content-center">
        <div className="col-md-8">
          <h1
            className="greeting-title display-1 text-lg text-md text-sm fw-bold mb-4"
            style={{ fontSize: 'calc(1.625rem + 2vw)' }}
          >
            Hi all, I'm Jonathan <span className="wave">👋</span>
          </h1>
          <p className="greeting-text lead mb-4" style={{ fontSize: '1.25rem', marginTop: '1rem', width: '100%' }}>
            I am a Frontend Software Developer 🚀 with experience in JavaScript, React.js, Node.js, and other
            libraries and frameworks. I create user-friendly and performant interfaces to enhance user experience.
          </p>

          <p className="skills-text lead mb-4" style={{ fontSize: '1.25rem', marginTop: '1rem', width: '100%' }}>
            My skills include responsive web development, and accessibility. I stay up-to-date with the latest
            frontend technologies and trends, always seeking new challenges to improve my skills.
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
              <a
                href="http://drive.google.com/file/d/1eavvNPP9TE-ALrtxx7IPc1vQp0Lwonwg/view?usp=sharing"
                className="text-white"
              >
                SEE MY RESUME
              </a>
            </button>

            <button className="btn-custom2">
              <a href="mailto:jojo.can.94@gmail.com" className="text-white">
                CONTACT ME
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
