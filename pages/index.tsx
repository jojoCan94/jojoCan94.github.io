import Head from 'next/head';
import type { NextPage } from 'next';
import Script from 'next/script';
import { useEffect } from 'react';
import BackToTopButton from '../components/BackToTopButton';
import ContactMe from '../components/ContactMe';
import Education from '../components/Education';
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';
import Greeting from '../components/Greeting';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import LottieWrapper from '../components/LottieWrapper';

import animationdata from '../public/assets/lf20_ssmuatywSV.json';

const LOTTIE_PLAYER_SELECTOR = '#firstLottie';

const Home: NextPage = () => {
  useEffect(() => {
    let intervalId: number | undefined;

    const initializeLottie = () => {
      if (typeof window === 'undefined') {
        return false;
      }

      const player = document.querySelector(LOTTIE_PLAYER_SELECTOR);
      if (!player || !window.LottieInteractivity) {
        return false;
      }

      window.LottieInteractivity.create({
        mode: 'scroll',
        player: LOTTIE_PLAYER_SELECTOR,
        actions: [
          {
            visibility: [0, 1],
            type: 'seek',
            frames: [0, 180],
          },
        ],
      });

      return true;
    };

    if (!initializeLottie()) {
      intervalId = window.setInterval(() => {
        if (initializeLottie()) {
          window.clearInterval(intervalId);
        }
      }, 500);
    }

    return () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Jonathan Cannizzaro | Frontend Developer Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Portfolio di Jonathan Cannizzaro, Frontend Developer specializzato in React, TypeScript e interfacce accessibili."
        />
        <meta
          name="keywords"
          content="Jonathan Cannizzaro, Frontend Developer, React, TypeScript, Portfolio, Web Accessibility"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jonathan Cannizzaro | Frontend Developer" />
        <meta
          property="og:description"
          content="Scopri esperienze, progetti e competenze di Jonathan Cannizzaro, sviluppatore frontend con focus su React e UX."
        />
        <meta property="og:url" content="https://jojoCan94.github.io" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Jonathan Cannizzaro | Frontend Developer" />
        <meta
          property="twitter:description"
          content="Portfolio professionale di Jonathan Cannizzaro con progetti, esperienze lavorative e contatti."
        />
      </Head>
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"
        strategy="afterInteractive"
      />
      <Script src="https://kit.fontawesome.com/8e633fab36.js" crossOrigin="anonymous" strategy="afterInteractive" />

      <div className="main-content">
        <Header />
        <article className="main-content">
          <section id="greeting" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <Greeting />
          </section>

          <section className="row" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <div className="col-md-4">
              <div className="skills-image-div">
                <div className="presentation-image">
                  <LottieWrapper animationData={animationdata} />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div id="skills" className="row skills-main-section">
                <Skills />
              </div>
            </div>
          </section>

          <section
            id="education"
            className="row education-section"
            style={{ marginTop: '4rem', marginBottom: '4rem' }}
          >
            <Education />
          </section>

          <section
            id="experiences"
            className="row work-section"
            style={{ marginTop: '4rem', marginBottom: '4rem' }}
          >
            <Experiences />
          </section>

          <section id="projects" className="row projects-section" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <Projects />
          </section>

          <section id="contact-me" className="row reach-out-card" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <ContactMe />
          </section>

          <div id="footer" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <Footer />
          </div>
        </article>
        <BackToTopButton />
      </div>
    </>
  );
};

export default Home;
