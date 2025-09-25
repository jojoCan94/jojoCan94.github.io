type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

const PROJECTS: Project[] = [
  {
    title: 'Developer Portfolio',
    description:
      'Single-page application built with Next.js, TypeScript and Bootstrap to consolidate my professional profile with animations, SEO optimisations and a contact workflow.',
    tech: ['Next.js', 'TypeScript', 'Bootstrap', 'Lottie'],
    links: [
      { label: 'View repository', href: 'https://github.com/jojoCan94/jojoCan94.github.io' },
    ],
  },
  {
    title: 'Retail Control Tower',
    description:
      'Enterprise dashboard for Syscons clients that aggregates logistics KPIs, demand forecasting widgets and alerting flows consumed daily by supply chain managers.',
    tech: ['React', 'Redux-Saga', 'TypeScript', 'Google Cloud'],
  },
  {
    title: 'Cloud Monitoring Console',
    description:
      'Multi-tenant interface for Nexum AI that visualises telemetry streams, offers role-based access controls and enables customers to configure alert pipelines in real time.',
    tech: ['React', 'Node.js', 'REST APIs', 'Storybook'],
  },
];

const Projects = (): JSX.Element => {
  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <div className="row">
        {PROJECTS.map((project) => (
          <div className="col-md-4 mb-3" key={project.title}>
            <div className="project-card h-100 d-flex flex-column">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="mt-auto">
                <p className="fw-semibold">Tech stack</p>
                <ul className="list-unstyled mb-3">
                  {project.tech.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                {project.links && (
                  <div className="project-links d-flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        className="btn btn-sm btn-outline-light"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
