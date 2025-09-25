const Experiences = (): JSX.Element => {
  return (
    <>
      <h1>Experiences</h1>

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
                <p className="work-job-title">Syscons Interactive</p>
                <p className="work-job-location">Via Francesco Restelli, 5, Milan, Italy</p>
                <p className="work-jod-desc">
                  Here I worked on some internal products of the company and I specialized in HTML, CSS,
                  React+Redux+saga+Typescript, branch and repo management on gitlab, google cloud, Api rest, TDD&e2e,
                  jira platform(agile work)
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
                <p className="work-job-title">Nexum-ai</p>
                <p className="work-job-location">Via Rodi, 49 - 00195 Rome, Italy</p>
                <p className="work-jod-desc">
                  Here I worked on some internal products of the company and I specialize in HTML, CSS,
                  React+Redux+saga+Typescript, branch and repo management on gitlab, google cloud, Api rest, TDD&e2e,
                  jira platform(agile work)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
