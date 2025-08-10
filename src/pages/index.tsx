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
                'hero__title',
                styles.fadeInUp,
                isVisible && styles.visible
              )}
            >
              Facettenschach
            </h1>
            <p
              className={clsx(
                'hero__subtitle',
                styles.fadeInUp,
                isVisible && styles.visible
              )}
              style={{ transitionDelay: '150ms' }}
            >
              Eine neue Dimension strategischer Spiele – jederzeit und überall.
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
                to="/play"
              >
                <Play className={styles.buttonIcon} />
                Jetzt spielen
              </Link>
              <Link
                className="button button--outline button--lg"
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
        <section id="features" className="margin-vert--xl">
          <div className="container">
            <div className="row text--center">
              <div className="col col--4">
                <div className={styles.featureIcon}>
                  <Crown size={40} />
                </div>
                <h3>Strategische Tiefe</h3>
                <p>
                  Jeder Zug zählt – plane voraus und gewinne mit Weitsicht.
                </p>
              </div>
              <div className="col col--4">
                <div className={styles.featureIcon}>
                  <Puzzle size={40} />
                </div>
                <h3>Einzigartige Mechaniken</h3>
                <p>
                  Innovative Regeln, die dein Schachdenken herausfordern.
                </p>
              </div>
              <div className="col col--4">
                <div className={styles.featureIcon}>
                  <Zap size={40} />
                </div>
                <h3>Dynamisches Spiel</h3>
                <p>
                  Keine Partie gleicht der anderen – passe dich an und siege.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Anleitung mit YouTube & Download */}
        <section id="instructions" className="margin-vert--xl">
          <div className="container text--center">
            <h2>Anleitung</h2>
            <p>Sieh dir das Tutorial an oder lade die Spielregeln herunter.</p>
            <div className="row margin-top--lg">
              <div className="col col--6">
                <div className={styles.videoWrapper}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/DEIN_VIDEO_ID"
                    title="Facettenschach Tutorial"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="col col--6 flex--center flex--col">
                <Link
                  className={clsx(
                    'button button--secondary button--lg',
                    styles.iconButton
                  )}
                  to="/downloads/facettenschach_regeln.pdf"
                >
                  <Download className={styles.buttonIcon} />
                  PDF herunterladen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className="container text--center">
            <h2>Bist du bereit?</h2>
            <p>Starte jetzt deine erste Partie Facettenschach!</p>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.iconButton
              )}
              to="/play"
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
