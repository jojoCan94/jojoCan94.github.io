const Education = (): JSX.Element => {
  return (
    <section className="education-section text-white">
      <h1 style={{ marginTop: '4rem', marginBottom: '4rem' }}>EDUCATION</h1>
      <div className="card p-3">
        <div className="education-card d-flex align-items-center flex-column text-center p-3">
          <img src="/assets/logo/unibo.jpg" alt="Education" width="150" />
          <div className="mt-3">
            <h2 className="education-card-title mb-1">Alma Mater Studiorum - Università di Bologna</h2>
            <h3 className="education-card-subtitle mb-1 mt-4">Laurea in Scienze Informatiche</h3>
            <div className="education-card-date mb-3">2019 - 2021</div>
            <p className="education-card-description">
              I completed two years of the Bachelor&apos;s degree in Computer Science, building a solid background in
              programming, software engineering and cybersecurity while working on collaborative lab projects.<br />
              <br />
              The academic path strengthened my analytical mindset and still influences the way I design, structure and
              test modern web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
