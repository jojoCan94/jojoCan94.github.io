export default function Education() {
  return (
    <section className="education-section text-white">
      <h1 style={{ marginTop: '4rem', marginBottom: '4rem' }}>EDUCATION</h1>
      <div className="card p-3">
        <div className="education-card d-flex align-items-center flex-column text-center p-3">
          <img src="/assets/logo/unibo.jpg" alt="Education" width="150" />
          <div>
            <h2 className="education-card-title mb-1">Alma Mater Studiorum- Universitaà degli studi di Bologna</h2>
            <h3 className="education-card-subtitle mb-1">Scienze inforrmatiche</h3>
            <div className="education-card-date mb-3">2019 - 2021</div>
            <p className="education-card-description">
              I completed two years of the three-year Bachelor's degree program in Computer Science at the University
              of Bologna, gaining a strong foundation in programming, computer security, and collaboration skills through
              group projects.<br />
              <br />
              Although I completed only two years of studies, my experience at the University of Bologna was a
              significant personal and professional growth opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
