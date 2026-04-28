import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';

const gstServices = [
  {
    title: 'GST Registration',
    description: 'Complete GST registration process for new businesses',
    features: ['Online application filing', 'Document preparation', 'Follow-up with authorities', 'Registration certificate'],
    price: 'Starting from ₹2,999',
    timeline: '7-15 working days'
  },
  {
    title: 'GST Return Filing',
    description: 'Monthly, quarterly, and annual GST return filing services',
    features: ['GSTR-1, GSTR-3B filing', 'Input tax credit reconciliation', 'Late fee calculation', 'Compliance monitoring'],
    price: 'Starting from ₹999/month',
    timeline: 'Same day filing'
  },
  {
    title: 'GST Notice Handling',
    description: 'Expert assistance for GST notices and assessments',
    features: ['Notice analysis', 'Response preparation', 'Hearing representation', 'Appeal filing'],
    price: 'Starting from ₹4,999',
    timeline: '3-7 working days'
  },
  {
    title: 'GST Refund Application',
    description: 'Process refund claims for excess GST payments',
    features: ['Refund eligibility check', 'Application filing', 'Document submission', 'Follow-up with department'],
    price: 'Starting from ₹1,999',
    timeline: '15-30 working days'
  }
];

const benefits = [
  { icon: 'bi-shield-check', title: '100% Compliance', desc: 'Ensure full compliance with GST regulations' },
  { icon: 'bi-clock-history', title: 'Timely Filing', desc: 'Never miss a GST filing deadline' },
  { icon: 'bi-calculator', title: 'Tax Optimization', desc: 'Maximize input tax credits and minimize liability' },
  { icon: 'bi-headset', title: 'Expert Support', desc: '24/7 support from GST experts' }
];

export default function GSTPage() {
  return (
    <>
      <Head>
        <title>GST Services - Registration, Filing, Compliance | NexEra Consultants</title>
        <meta name="description" content="Complete GST services including registration, return filing, notice handling, and refund applications. Expert GST consultants with 100% compliance guarantee." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="GST Services"
          subtitle="Complete GST solutions for businesses - Registration, Filing, Compliance & More"
          breadcrumb="GST Services"
        />

        {/* Service Overview */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="position-relative">
                  <Image
                    src="/Logo with name.png"
                    alt="GST Services"
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', borderRadius: '16px' }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                       style={{ background: 'rgba(30, 129, 205, 0.8)', borderRadius: '16px' }}>
                    <div className="text-center text-white">
                      <i className="bi bi-receipt fs-1 mb-3"></i>
                      <h3 className="fw-bold">GST Experts</h3>
                      <p>Trusted by 500+ businesses</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
                  GST Services
                </p>
                <h2 className="primary-text">Comprehensive GST Solutions</h2>
                <p className="text-muted mt-3 mb-4">
                  Navigate the complexities of GST with our expert services. From registration to compliance, 
                  we handle all aspects of GST to keep your business running smoothly and compliant.
                </p>
                <div className="row g-3">
                  {benefits.map((benefit) => (
                    <div className="col-sm-6" key={benefit.title}>
                      <div className="d-flex align-items-start gap-3">
                        <div className="feature-icon">
                          <i className={`bi ${benefit.icon}`}></i>
                        </div>
                        <div>
                          <h6 className="fw-bold primary-text mb-1">{benefit.title}</h6>
                          <small className="text-muted">{benefit.desc}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Our GST Services</h2>
              <p className="section-subtitle mt-2">
                Complete range of GST services tailored to your business needs
              </p>
            </div>
            <div className="row g-4">
              {gstServices.map((service, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="service-card h-100">
                    <div className="d-flex align-items-center mb-3">
                      <div className="service-icon me-3" style={{ background: 'rgba(30, 129, 205, 0.1)' }}>
                        <i className="bi bi-receipt primary-text"></i>
                      </div>
                      <h4 className="primary-text mb-0">{service.title}</h4>
                    </div>
                    <p className="text-muted mb-3">{service.description}</p>
                    <ul className="list-unstyled mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="bi bi-check-circle accent-text me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <div className="fw-bold primary-text">{service.price}</div>
                          <small className="text-muted">Timeline: {service.timeline}</small>
                        </div>
                      </div>
                      <Link href="/contact" className="btn btn-accent w-100">
                        Get Started <i className="bi bi-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="about-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Our GST Process</h2>
              <p className="section-subtitle mt-2">Simple, transparent, and efficient process</p>
            </div>
            <div className="row g-4">
              {[
                { step: '01', title: 'Consultation', desc: 'Free consultation to understand your GST requirements' },
                { step: '02', title: 'Documentation', desc: 'Collect and prepare all necessary documents' },
                { step: '03', title: 'Filing', desc: 'File applications and returns with government portals' },
                { step: '04', title: 'Follow-up', desc: 'Regular follow-up and status updates until completion' }
              ].map((process, index) => (
                <div className="col-sm-6 col-lg-3" key={index}>
                  <div className="text-center">
                    <div className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                         style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent)', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                      {process.step}
                    </div>
                    <h5 className="primary-text">{process.title}</h5>
                    <p className="text-muted small">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))', padding: '60px 0', color: '#fff' }}>
          <div className="container text-center">
            <h2 className="fw-bold mb-3">Ready to Get GST Compliant?</h2>
            <p style={{ opacity: 0.85, maxWidth: 500, margin: '0 auto 28px' }}>
              Let our GST experts handle your compliance while you focus on growing your business.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link href="/contact" className="btn btn-accent btn-lg px-5">
                Get Free Consultation <i className="bi bi-arrow-right ms-2"></i>
              </Link>
              <Link href="/services" className="btn btn-outline-light btn-lg px-5">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}