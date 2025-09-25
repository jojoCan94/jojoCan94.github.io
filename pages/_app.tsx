import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/greetingMain.css';
import '../styles/skills.css';
import '../styles/education.css';
import '../styles/workExperiences.css';
import '../styles/projects.css';
import '../styles/reachMe.css';
import '../styles/backToTop.css';

import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    useEffect(() => {
    import("bootstrap");
  }, []);

  return <Component {...pageProps} />;
}
