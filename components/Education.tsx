import { useTranslations } from '../lib/i18n';

const Education = (): JSX.Element => {
  const { title, card } = useTranslations('Education');

  return (
    <section className="education-section text-white">
      <h1 style={{ marginTop: '4rem', marginBottom: '4rem' }}>{title}</h1>
      <div className="card p-3">
        <div className="education-card d-flex align-items-center flex-column text-center p-3">
          <img src="/assets/logo/unibo.jpg" alt="Education" width="150" />
          <div className="mt-3">
            <h2 className="education-card-title mb-1">{card.institution}</h2>
            <h3 className="education-card-subtitle mb-1 mt-4">{card.course}</h3>
            <div className="education-card-date mb-3">{card.period}</div>
            {card.description.map((paragraph, index) => (
              <p className="education-card-description" key={`${card.institution}-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
