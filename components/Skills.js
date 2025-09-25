export default function Skills() {
  return (
    <>
      <h1 className="skills-title col-md-12">What I Do</h1>

      <p className="skills-paragraph">
        I am incurably curious about both front-end and back-end technologies, but my absolute passion is front-end.
      </p>

      <div className="mt-4">
        <ul className="d-flex justify-content-around p-3 skills-icon" style={{ listStyleType: 'none' }}>
          <li>
            <img src="/assets/svg/skills-icon/html.svg" width="80" alt="HTML icon" />
          </li>
          <li>
            <img src="/assets/svg/skills-icon/css.svg" width="80" alt="CSS icon" />
          </li>
          <li>
            <img src="/assets/svg/skills-icon/js.svg" width="80" alt="JavaScript icon" />
          </li>
          <li>
            <img src="/assets/svg/skills-icon/google.svg" width="80" alt="Google icon" />
          </li>
        </ul>

        <ul className="d-flex justify-content-around p-3 skills-icon" style={{ listStyleType: 'none' }}>
          <li>
            <img src="/assets/svg/skills-icon/nodejs.svg" width="80" alt="Node.js icon" />
          </li>
          <li>
            <img src="/assets/svg/skills-icon/npm.svg" width="80" alt="npm icon" />
          </li>
          <li>
            <img src="/assets/svg/skills-icon/python.svg" width="80" alt="Python icon" />
          </li>
          <li>
            <img src="/assets/svg/skills-icon/react.svg" width="80" alt="React icon" />
          </li>
        </ul>
      </div>

      <p className="skills-explained mt-4">
        ⚡ I develop highly interactive user interfaces for your web and mobile applications.
      </p>

      <p className="skills-explained">⚡ Progressive Web Applications (PWA) in normal and SPA stacks.</p>

      <p className="skills-explained">⚡ Integration of third-party services such as Firebase/AWS/Digital Ocean.</p>

      <p className="skills-explained">
        ⚡ I also strive to optimize web accessibility and performance through the use of best practices and
        standards.
      </p>
    </>
  );
}
