import { useTranslations } from '../lib/i18n';

const Skills = (): JSX.Element => {
  const { title, intro, highlight1, highlight2, highlight3, highlight4 } = useTranslations('Skills');

  return (
    <>
      <h1 className="skills-title col-md-12">{title}</h1>

      <p className="skills-paragraph">{intro}</p>

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

      <p className="skills-explained mt-4">{highlight1}</p>

      <p className="skills-explained">{highlight2}</p>

      <p className="skills-explained">{highlight3}</p>

      <p className="skills-explained">{highlight4}</p>
    </>
  );
};

export default Skills;
