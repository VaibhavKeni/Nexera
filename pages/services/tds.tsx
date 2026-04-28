import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';

const tdsServices = [
  {
    title: 'TDS Return Filing (26Q)',
    description: 'Quarterly TDS return filing for salary payments',
    features: ['Form 26Q preparation', 'Online filing', 'TDS certificate generation', 'Compliance check'],
    price: 'Starting from ₹1,499/quarter',
    timeline: '2-3 working days'
  },
  {
    title: 'TDS Return Filing (26QB)',
    description: 'Quarterly TDS return filing for property transactions',
    features: ['Form 26QB preparation', 'Property transaction analysis', 'Online submission', 'Certificate issuance'],
    price: 'Starting from ₹1,999/quarter',
    timeline: '3-5 working days'
  },
  {
    title: 'TDS Challan Payment',
    description: 'TDS challan preparation and payment services',
    features: ['Challan generation', 'Online payment', 'Payment confirmation', 'Record maintenance'],
    price: 'Starting from ₹299/challan',
    timeline: 'Same day'
  },
  {
    title: 'TDS Correction Services',
    description: 'Correction of TDS returns and certificates',
    features: ['Error identification', 'Correction filing', 'Revised certificates', 'Compliance restoration'],
    price: 'Starting from ₹2,499',
    timeline: '5-7 working days'
  }
];

const tdsTypes = [
  { type: 'Section 194A', desc: 'Interest other than on securities', rate: '10%' },
  { type: 'Section 194C', desc: 'Payment to contractors', rate: '1-2%' },
  { type: 'Section 194H', desc: 'Commission or brokerage', rate: '5%' },
  { type: 'Section 194I', desc: 'Rent payment', rate: '10%' },
  { type: 'Section 194J', desc: 'Professional/technical services', rate: '10%' },
  { type: 'Section 194O', desc: 'E-commerce transactions', rate: '1%' }
];

export default function TDSPage() {
  return (
    <>
      <Head>
        <title>TDS Services - Return Filing, Challan Payment | NexEra Consultants</title>
        <meta name="description" content="Expert TDS services including return filing (26Q, 26QB), challan payment, and TDS corrections. Ensure TDS compliance with our professional services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="TDS Services"
          subtitle="Complete TDS compliance solutions - Filing, Payment, and Corrections"
          breadcrumb="TDS Services"
        />

        {/* Service Overview */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
                  TDS Services
                </p>
                <h2 className="primary-text">Expert TDS Compliance</h2>
                <p className="text-muted mt-3 mb-4">
                  Ensure seamless TDS compliance with our comprehensive services. From quarterly return filing 
                  to challan payments, we handle all TDS requirements for your business.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="feature-icon">
                        <i className="bi bi-calendar-check"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold primary-text mb-1">Timely Filing</h6>
                        <small className="text-muted">Never miss TDS deadlines</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="feature-icon">
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold primary-text mb-1">100% Accurate</h6>
                        <small className="text-muted">Error-free TDS calculations</small>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-accent btn-lg">
                  Get TDS Consultation <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <Image
                    src="/Logo with name.png"
                    alt="TDS Services"
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', borderRadius: '16px' }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                       style={{ background: 'rgba(6, 61, 117, 0.8)', borderRadius: '16px' }}>
                    <div className="text-center text-white">
                      <i className="bi bi-file-earmark-text fs-1 mb-3"></i>
                      <h3 className="fw-bold">TDS Experts</h3>
                      <p>500+ Returns Filed Successfully</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TDS Types */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">TDS Sections We Handle</h2>
              <p className="section-subtitle mt-2">
                Expert handling of all major TDS sections and rates
              </p>
            </div>
            <div className="row g-4">
              {tdsTypes.map((tds, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="service-card text-center">
                    <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(6, 61, 117, 0.1)' }}>
                      <i className="bi bi-percent secondary-text"></i>
                    </div>
                    <h5 className="primary-text">{tds.type}</h5>
                    <p className="text-muted mb-2">{tds.desc}</p>
                    <div className="fw-bold accent-text fs-5">{tds.rate}</div>
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
              <h2 className="section-title">Our TDS Services</h2>
              <p className="section-subtitle mt-2">
                Comprehensive TDS solutions for all your compliance needs
              </p>
            </div>
            <div className="row g-4">
              {tdsServices.map((service, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="service-card h-100">
                    <div className="d-flex align-items-center mb-3">
                      <div className="service-icon me-3" style={{ background: 'rgba(6, 61, 117, 0.1)' }}>
                        <i className="bi bi-file-earmark-text secondary-text"></i>
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

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))', padding: '60px 0', color: '#fff' }}>
          <div className="container text-center">
            <h2 className="fw-bold mb-3">Need TDS Compliance Support?</h2>
            <p style={{ opacity: 0.85, maxWidth: 500, margin: '0 auto 28px' }}>
              Let our TDS experts ensure your business stays compliant with all TDS regulations.
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