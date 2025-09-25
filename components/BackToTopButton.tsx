import { useEffect, useState } from 'react';
import { useTranslations } from '../lib/i18n';

const BackToTopButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { title } = useTranslations('BackToTop');

  useEffect(() => {
    const handleScroll = () => {
      const offset =
        window.pageYOffset ??
        document.documentElement?.scrollTop ??
        document.body?.scrollTop ??
        0;
      setIsVisible(offset > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="goToTopButton"
      title={title}
      onClick={scrollToTop}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      ☝️
    </button>
  );
};

export default BackToTopButton;
