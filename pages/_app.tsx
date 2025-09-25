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

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
