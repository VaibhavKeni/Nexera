import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import LogoShowcase from '../components/LogoShowcase';
import { features } from '../components/About';

const team = [
  { name: 'Rajesh Sharma', role: 'CA & GST Expert', icon: '👨‍💼' },
  { name: 'Priya Mehta', role: 'Income Tax Consultant', icon: '👩‍💼' },
  { name: 'Amit Patel', role: 'Accounting Specialist', icon: '👨‍💻' },
  { name: 'Neha Joshi', role: 'IT & Digital Marketing', icon: '👩‍💻' },
];

const values = [
  { icon: 'bi-award', title: 'Integrity', desc: 'We operate with complete transparency and honesty in every engagement.' },
  { icon: 'bi-lightbulb', title: 'Innovation', desc: 'We leverage the latest tools and technology to deliver smarter solutions.' },
  { icon: 'bi-heart', title: 'Client First', desc: 'Your success is our priority — we go the extra mile for every client.' },
  { icon: 'bi-graph-up', title: 'Excellence', desc: 'We maintain the highest standards of quality in all our services.' },
];

export default function AboutPage() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>About Us – NexEra Consultants</title>
        <meta name="description" content="Learn about NexEra Consultants — our story, mission, team, and values." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="About NexEra Consultants"
          subtitle="We are a team of dedicated professionals committed to simplifying compliance and empowering businesses."
          breadcrumb="About"
        />

        <LogoShowcase 
          title="NexEra Consultants"
          subtitle="Trusted Financial & IT Consultancy Since 2019"
        />

        {/* Story */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <div style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))', borderRadius: 24, padding: '48px 36px', color: '#fff' }}>
                  <h3 className="fw-bold mb-3">Why Choose NexEra?</h3>
                  <p style={{ opacity: 0.85 }}>
                    NexEra Consultants is a one-stop solution for all your financial, tax, and technology needs. We combine expertise with technology to deliver fast, accurate, and reliable services.
                  </p>
                  <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                  <div className="row g-3 mt-1">
                    {[
                      { n: '500+', l: 'Clients Served' },
                      { n: '8+', l: 'Service Categories' },
                      { n: '5+', l: 'Years in Business' },
                      { n: '24/7', l: 'Support Available' },
                    ].map((s) => (
                      <div className="col-6" key={s.l}>
                        <div className="fw-bold fs-4" style={{ color: 'var(--accent)' }}>{s.n}</div>
                        <div style={{ fontSize: '0.82rem', opacity: 0.8 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <p className="text-uppercase fw-bold mb-1" style={{ color: 'var(--accent)', letterSpacing: 2 }}>Our Story</p>
                <h2>Simplifying Compliance &amp; Empowering Businesses</h2>
                <p className="text-muted mt-3 mb-2">
                  Founded with a vision to make financial and compliance services accessible to every business, NexEra Consultants has grown into a trusted name across the region.
                </p>
                <p className="text-muted mb-4">
                  We started as a small tax consultancy and have expanded to offer a full suite of services — from GST and TDS to website development and digital marketing — all under one roof.
                </p>
                <div>
                  {features.map((f) => (
                    <div className="feature-item" key={f.title}>
                      <div className="feature-icon"><i className={`bi ${f.icon}`} /></div>
                      <div>
                        <div className="fw-bold" style={{ color: 'var(--primary)' }}>{f.title}</div>
                        <div className="text-muted" style={{ fontSize: '0.9rem' }}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ background: '#f8f9fa', padding: '80px 0' }}>
          <div className="container">
            <div className="text-center mb-5">
              <p className="text-uppercase fw-bold mb-1" style={{ color: 'var(--accent)', letterSpacing: 2 }}>What Drives Us</p>
              <h2 className="section-title">Our Core Values</h2>
            </div>
            <div className="row g-4">
              {values.map((v) => (
                <div className="col-sm-6 col-lg-3" key={v.title}>
                  <div className="service-card text-center">
                    <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(30,129,205,0.08)' }}>
                      <i className={`bi ${v.icon}`} style={{ color: 'var(--primary)', fontSize: '1.5rem' }} />
                    </div>
                    <h5>{v.title}</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="text-center mb-5">
              <p className="text-uppercase fw-bold mb-1" style={{ color: 'var(--accent)', letterSpacing: 2 }}>The People</p>
              <h2 className="section-title">Meet Our Team</h2>
            </div>
            <div className="row g-4 justify-content-center">
              {team.map((t) => (
                <div className="col-sm-6 col-lg-3" key={t.name}>
                  <div className="service-card text-center">
                    <div style={{ fontSize: '3.5rem', marginBottom: 12 }}>{t.icon}</div>
                    <h5 className="mb-1">{t.name}</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '0.88rem' }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))', padding: '60px 0', color: '#fff' }}>
          <div className="container text-center">
            <h2 className="fw-bold mb-3">Ready to Work With Us?</h2>
            <p style={{ opacity: 0.85, maxWidth: 500, margin: '0 auto 28px' }}>
              Let's simplify your compliance and grow your business together.
            </p>
            <Link href="/contact" className="btn btn-accent btn-lg px-5">
              Get In Touch <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
