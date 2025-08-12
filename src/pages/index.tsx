import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';
import { ChevronDown, Play, Zap, Crown, Puzzle, Download } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout
      title="Facettenschach"
      description="Spiele Facettenschach online und entdecke eine neue strategische Herausforderung"
    >
      <main>
        {/* Hero-Section */}
        <section
          className={clsx('hero hero--primary', styles.heroBanner)}
          style={{ minHeight: 'calc(100vh - 60px)' }}
        >
          <div className="container text--center">
            <h1
              className={clsx(
                styles.heroTitle,
                styles.fadeInUp,
                isVisible && styles.visible
              )}
            >
              Facettenschach
            </h1>
            <p
              className={clsx(
                styles.heroSubtitle,
                styles.fadeInUp,
                isVisible && styles.visible
              )}
              style={{ transitionDelay: '150ms' }}
            >
              Erleben Sie Schach wie nie zuvor. Ein revolutionäres Spiel, das strategische Tiefe mit dynamischen Deckbuilding-Mechaniken für die ultimative geistige Herausforderung kombiniert.
            </p>
            <div
              className={clsx(
                styles.fadeInUp,
                isVisible && styles.visible,
                styles.buttonGroup
              )}
              style={{ transitionDelay: '300ms' }}
            >
              <Link
                className={clsx(
                  'button button--secondary button--lg',
                  styles.iconButton
                )}
                to="https://pybay.de"
              >
                <Play className={styles.buttonIcon} />
                Jetzt spielen
              </Link>

              {/* use module outlineButton instead of raw "button--outline" */}
              <Link
                className={clsx('button button--lg', styles.outlineButton)}
                to="#features"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
          <div className={styles.scrollIndicator}>
            <ChevronDown />
          </div>
        </section>

        {/* Features */}
        <section id="features" className={clsx('margin-vert--xl', styles.section50)}>
          <div className="container">
            <div className="row text--center">
              <div className="col col--4">
                <div className={styles.featureIcon}>
                  <Crown size={40} />
                </div>
                <h3>Strategische Tiefe</h3>
                <p>Jeder Zug zählt – plane voraus und gewinne mit Weitsicht.</p>
              </div>
              <div className="col col--4">
                <div className={styles.featureIcon}>
                  <Puzzle size={40} />
                </div>
                <h3>Einzigartige Mechaniken</h3>
                <p>Innovative Regeln, die dein Schachdenken herausfordern.</p>
              </div>
              <div className="col col--4">
                <div className={styles.featureIcon}>
                  <Zap size={40} />
                </div>
                <h3>Dynamisches Spiel</h3>
                <p>Keine Partie gleicht der anderen – passe dich an und siege.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <section id="video" className={clsx('margin-vert--xl', styles.section50)}>
          <div className="container text--center">
            <h2>Video-Trailer</h2>
            <p>Ein kurzer Einblick in die spannenden Möglichkeiten von Facettenschach.</p>
            <div className="margin-top--lg">
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/0Qs4A9BVVJA"
                  title="Facettenschach Trailer"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={clsx(styles.ctaSection, styles.section50)}>
          <div className="container text--center">
            <h2>Bist du bereit?</h2>
            <p>Starte jetzt deine erste Partie Facettenschach!</p>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.iconButton
              )}
              to="https://pybay.de"
            >
              <Play className={styles.buttonIcon} />
              Jetzt spielen
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
