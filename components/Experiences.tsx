const Experiences = (): JSX.Element => {
  return (
    <>
      <h1>Experiences</h1>

      <div className="work-experience">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="work-logo title"
                src="/assets/logo/work-logos/syscons-interactive.webp"
                alt="Syscons logo"
                width="300"
              />
            </div>
            <div className="flip-card-back">
              <div className="card-info">
                <div className="work-description">
                  <h3>Frontend Developer</h3>
                  <p className="work-job-title">Syscons Interactive · Full-time</p>
                  <p className="work-job-location">Milan, Italy · 2022 - Present</p>
                  <p className="work-job-desc">
                    Lead the frontend development of data-intensive supply chain platforms used by international
                    retailers. I evolved the shared React + Redux + TypeScript design system, introduced testing
                    practices (Jest, React Testing Library and Cypress E2E) and integrated Google Cloud services with a
                    resilient API layer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front-nex">
              <img
                className="work-logo title rounded-circle"
                src="/assets/logo/work-logos/nexum-logo.jpeg"
                alt="Nexum logo"
                width="180"
              />
            </div>
            <div className="flip-card-back-nex">
              <div className="card-info">
                <div className="work-description">
                  <h3>Cloud Frontend Developer</h3>
                  <p className="work-job-title">Nexum AI · Full-time</p>
                  <p className="work-job-location">Rome, Italy · 2020 - 2022</p>
                  <p className="work-job-desc">
                    Delivered multi-tenant analytics dashboards for cloud monitoring products. I designed reusable UI
                    components, coordinated GitLab workflows and pipelines, and collaborated with backend engineers to
                    align API contracts with the UX needs of enterprise customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
