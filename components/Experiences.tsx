import { useTranslations } from '../lib/i18n';

type ExperienceKey = 'syscons' | 'nexum';

type ExperienceCard = {
  key: ExperienceKey;
  imageSrc: string;
  imageAlt: string;
  frontClassName: string;
  backClassName: string;
  imageWidth: number;
};

const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    key: 'syscons',
    imageSrc: '/assets/logo/work-logos/syscons-interactive.webp',
    imageAlt: 'Syscons logo',
    frontClassName: 'flip-card-front',
    backClassName: 'flip-card-back',
    imageWidth: 300,
  },
  {
    key: 'nexum',
    imageSrc: '/assets/logo/work-logos/nexum-logo.jpeg',
    imageAlt: 'Nexum logo',
    frontClassName: 'flip-card-front-nex',
    backClassName: 'flip-card-back-nex',
    imageWidth: 180,
  },
];

const Experiences = (): JSX.Element => {
  const { title, cards } = useTranslations('Experiences');

  return (
    <>
      <h1>{title}</h1>

      <div className="work-experience">
        {EXPERIENCE_CARDS.map((card) => {
          const translations = cards[card.key];

          return (
            <div className="flip-card" key={card.key}>
              <div className="flip-card-inner">
                <div className={card.frontClassName}>
                  <img className="work-logo title" src={card.imageSrc} alt={card.imageAlt} width={card.imageWidth} />
                </div>
                <div className={card.backClassName}>
                  <div className="card-info">
                    <div className="work-description">
                      <h3>{translations.role}</h3>
                      <p className="work-job-title">{translations.company}</p>
                      <p className="work-job-location">{translations.location}</p>
                      <p className="work-jod-desc">{translations.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experiences;
