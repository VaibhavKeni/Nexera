import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';

const panServices = [
  {
    title: 'New PAN Card Application',
    description: 'Apply for new PAN card for individuals and businesses',
    features: ['Form 49A/49AA filing', 'Document verification', 'Online application', 'Home delivery'],
    price: 'Starting from ₹199',
    timeline: '15-20 working days'
  },
  {
    title: 'PAN Card Correction',
    description: 'Correction of errors in existing PAN card details',
    features: ['Name correction', 'Date of birth correction', 'Address update', 'Signature change'],
    price: 'Starting from ₹199',
    timeline: '15-20 working days'
  },
  {
    title: 'Aadhaar-PAN Linking',
    description: 'Link your Aadhaar card with PAN card as per government mandate',
    features: ['Online linking process', 'Verification support', 'Status tracking', 'Compliance assurance'],
    price: 'Starting from ₹99',
    timeline: 'Same day'
  },
  {
    title: 'Duplicate PAN Card',
    description: 'Get duplicate PAN card for lost or damaged cards',
    features: ['Lost PAN recovery', 'Damaged card replacement', 'Quick processing', 'Secure delivery'],
    price: 'Starting from ₹199',
    timeline: '15-20 working days'
  }
];

const panRequirements = [
  { type: 'Individual', docs: ['Aadhaar Card', 'Passport Size Photo', 'Address Proof', 'Date of Birth Proof'] },
  { type: 'Company', docs: ['Certificate of Incorporation', 'MOA & AOA', 'Board Resolution', 'Address Proof'] },
  { type: 'Partnership', docs: ['Partnership Deed', 'Address Proof', 'Identity Proof of Partners', 'Bank Statement'] }
];

export default function PANCardPage() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>PAN Card Services - Application, Correction, Linking | NexEra Consultants</title>
        <meta name="description" content="Complete PAN card services including new applications, corrections, Aadhaar linking, and duplicate card issuance. Fast and reliable PAN card solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="PAN Card Services"
          subtitle="Complete PAN card solutions - Application, Correction, Linking & More"
          breadcrumb="PAN Card Services"
        />

        {/* Service Overview */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
                  PAN Card Services
                </p>
                <h2 className="primary-text">Complete PAN Card Solutions</h2>
                <p className="text-muted mt-3 mb-4">
                  Get your PAN card hassle-free with our comprehensive services. From new applications to 
                  corrections and Aadhaar linking, we handle all PAN card requirements efficiently.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="feature-icon">
                        <i className="bi bi-lightning"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold primary-text mb-1">Quick Processing</h6>
                        <small className="text-muted">Fast application processing</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="feature-icon">
                        <i className="bi bi-house-door"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold primary-text mb-1">Home Delivery</h6>
                        <small className="text-muted">PAN card delivered to your address</small>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-accent btn-lg">
                  Apply for PAN Card <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <Image
                    src="/banner.jpg"
                    alt="PAN Card Services"
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', borderRadius: '16px' }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                       style={{ background: 'rgba(30, 129, 205, 0.8)', borderRadius: '16px' }}>
                    <div className="text-center text-white">
                      <i className="bi bi-credit-card fs-1 mb-3"></i>
                      <h3 className="fw-bold">PAN Card Experts</h3>
                      <p>1000+ PAN Cards Processed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Requirements */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Document Requirements</h2>
              <p className="section-subtitle mt-2">
                Required documents for different types of PAN card applications
              </p>
            </div>
            <div className="row g-4">
              {panRequirements.map((req, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="service-card">
                    <div className="service-icon mb-3" style={{ background: 'rgba(30, 129, 205, 0.1)' }}>
                      <i className="bi bi-person primary-text"></i>
                    </div>
                    <h5 className="primary-text mb-3">{req.type}</h5>
                    <ul className="list-unstyled">
                      {req.docs.map((doc, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="bi bi-check-circle accent-text me-2"></i>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="about-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Our PAN Card Services</h2>
              <p className="section-subtitle mt-2">
                Comprehensive PAN card solutions for all your needs
              </p>
            </div>
            <div className="row g-4">
              {panServices.map((service, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="service-card h-100">
                    <div className="d-flex align-items-center mb-3">
                      <div className="service-icon me-3" style={{ background: 'rgba(30, 129, 205, 0.1)' }}>
                        <i className="bi bi-credit-card primary-text"></i>
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
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Our PAN Card Process</h2>
              <p className="section-subtitle mt-2">Simple and efficient process</p>
            </div>
            <div className="row g-4">
              {[
                { step: '01', title: 'Document Collection', desc: 'Gather all required documents as per application type' },
                { step: '02', title: 'Form Filling', desc: 'Complete Form 49A/49AA with accurate information' },
                { step: '03', title: 'Online Submission', desc: 'Submit application online with supporting documents' },
                { step: '04', title: 'Delivery', desc: 'Receive PAN card at your registered address' }
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
            <h2 className="fw-bold mb-3">Need PAN Card Services?</h2>
            <p style={{ opacity: 0.85, maxWidth: 500, margin: '0 auto 28px' }}>
              Get your PAN card quickly and hassle-free with our expert assistance.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link href="/contact" className="btn btn-accent btn-lg px-5">
                Apply Now <i className="bi bi-arrow-right ms-2" />
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