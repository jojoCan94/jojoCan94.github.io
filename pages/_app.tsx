import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/greetingMain.css';
import '../styles/skills.css';
import '../styles/education.css';
import '../styles/workExperiences.css';
import '../styles/projects.css';
import '../styles/reachMe.css';
import '../styles/backToTop.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { TranslationProvider } from '../lib/i18n';
import { DEFAULT_LOCALE, defaultMessages, type Messages } from '../lib/messages';

type AppPropsWithMessages = AppProps<{ messages?: Messages }>;

export default function App({ Component, pageProps }: AppPropsWithMessages): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    void import('bootstrap');
  }, []);

  const locale = router.locale ?? router.defaultLocale ?? DEFAULT_LOCALE;
  const messages = pageProps.messages ?? defaultMessages;

  return (
    <TranslationProvider locale={locale} messages={messages}>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}
