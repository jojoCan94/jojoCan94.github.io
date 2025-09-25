import { useTranslations } from '../lib/i18n';

type ProjectKey = 'portfolio' | 'todo' | 'api';

const PROJECTS: ProjectKey[] = ['portfolio', 'todo', 'api'];

const Projects = (): JSX.Element => {
  const { title, cards } = useTranslations('Projects');

  return (
    <section className="projects-section">
      <h1>{title}</h1>
      <div className="row">
        {PROJECTS.map((projectKey) => (
          <div className="col-md-4 mb-3" key={projectKey}>
            <div className="project-card h-100">
              <h3>{cards[projectKey].title}</h3>
              <p>{cards[projectKey].description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
