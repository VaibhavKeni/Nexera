import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import LogoShowcase from '../components/LogoShowcase';
import { services } from '../components/Services';

export default function ServicesPage() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>Our Services – NexEra Consultants</title>
        <meta name="description" content="Explore all services offered by NexEra Consultants including GST, TDS, Income Tax, Accounting, PF, PAN Card, and IT Services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="Our Services"
          subtitle="End-to-end financial, compliance, and technology solutions for individuals and businesses."
          breadcrumb="Services"
        />

        <LogoShowcase 
          title="Complete Business Solutions"
          subtitle="Your One-Stop Partner for Financial, Tax & IT Services"
        />

        {/* Service Categories Overview */}
        <section className="about-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="text-center p-4" style={{ background: 'rgba(30, 129, 205, 0.05)', borderRadius: '16px' }}>
                  <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(30, 129, 205, 0.1)' }}>
                    <i className="bi bi-receipt primary-text fs-3"></i>
                  </div>
                  <h4 className="primary-text">Tax & Compliance</h4>
                  <p className="text-muted">GST, TDS, Income Tax, Professional Tax, and PF services with 100% compliance guarantee.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-center p-4" style={{ background: 'rgba(6, 61, 117, 0.05)', borderRadius: '16px' }}>
                  <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(6, 61, 117, 0.1)' }}>
                    <i className="bi bi-calculator secondary-text fs-3"></i>
                  </div>
                  <h4 className="secondary-text">Accounting & Finance</h4>
                  <p className="text-muted">Complete bookkeeping, financial statements, and account management services.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-center p-4" style={{ background: 'rgba(60, 250, 222, 0.05)', borderRadius: '16px' }}>
                  <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(60, 250, 222, 0.1)' }}>
                    <i className="bi bi-laptop accent-text fs-3"></i>
                  </div>
                  <h4 className="accent-text">IT & Digital</h4>
                  <p className="text-muted">Website development, digital marketing, and software solutions for modern businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>What We Offer</p>
              <h2 className="section-title">Complete Service Portfolio</h2>
              <p className="section-subtitle mt-2">
                From tax compliance to digital solutions — we cover everything your business needs.
              </p>
            </div>
            <div className="row g-4">
              {services.map((s) => (
                <div className="col-sm-6 col-lg-3" key={s.title}>
                  <Link href={s.link} className="text-decoration-none">
                    <div className="service-card h-100" style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}>
                      <div className="service-icon" style={{ background: s.color }}>{s.icon}</div>
                      <h5>{s.title}</h5>
                      <ul>
                        {s.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                      <div className="mt-auto pt-3">
                        <small className="accent-text fw-bold">
                          Learn More <i className="bi bi-arrow-right ms-1"></i>
                        </small>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))', padding: '60px 0', color: '#fff' }}>
          <div className="container text-center">
            <h2 className="fw-bold mb-3">Need a Specific Service?</h2>
            <p style={{ opacity: 0.85, maxWidth: 500, margin: '0 auto 28px' }}>
              Get in touch with our experts and we'll guide you through the right solution for your needs.
            </p>
            <Link href="/contact" className="btn btn-accent btn-lg px-5">
              Contact Us Today <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
