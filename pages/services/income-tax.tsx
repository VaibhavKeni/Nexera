import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';

const itServices = [
  {
    title: 'Individual ITR Filing',
    description: 'Complete income tax return filing for individuals',
    features: ['ITR-1, ITR-2, ITR-3 filing', 'Tax calculation & optimization', 'Refund processing', 'E-verification'],
    price: 'Starting from ₹999',
    timeline: '2-3 working days'
  },
  {
    title: 'Business ITR Filing',
    description: 'Corporate and business income tax return filing',
    features: ['ITR-4, ITR-5, ITR-6 filing', 'Business income calculation', 'Depreciation schedules', 'Audit reports'],
    price: 'Starting from ₹4,999',
    timeline: '5-7 working days'
  },
  {
    title: 'Tax Planning',
    description: 'Strategic tax planning and consultation services',
    features: ['Investment planning', 'Tax saving strategies', 'Deduction optimization', 'Future tax projections'],
    price: 'Starting from ₹2,999',
    timeline: '3-5 working days'
  },
  {
    title: 'ITR Notice Handling',
    description: 'Expert assistance for income tax notices',
    features: ['Notice analysis', 'Response preparation', 'Documentation support', 'Hearing representation'],
    price: 'Starting from ₹3,999',
    timeline: '5-10 working days'
  }
];

const taxSlabs = [
  { income: 'Up to ₹2.5 Lakh', rate: 'Nil', desc: 'No tax for income up to ₹2.5 lakh' },
  { income: '₹2.5L - ₹5L', rate: '5%', desc: 'Tax rate for income between ₹2.5L to ₹5L' },
  { income: '₹5L - ₹10L', rate: '20%', desc: 'Tax rate for income between ₹5L to ₹10L' },
  { income: 'Above ₹10L', rate: '30%', desc: 'Tax rate for income above ₹10 lakh' }
];

const deductions = [
  { section: '80C', limit: '₹1.5 Lakh', desc: 'PPF, ELSS, Life Insurance, etc.' },
  { section: '80D', limit: '₹25,000', desc: 'Health Insurance Premium' },
  { section: '24(b)', limit: '₹2 Lakh', desc: 'Home Loan Interest' },
  { section: '80E', limit: 'No Limit', desc: 'Education Loan Interest' }
];

export default function IncomeTaxPage() {
  return (
    <>
      <Head>
        <title>Income Tax Services - ITR Filing, Tax Planning | NexEra Consultants</title>
        <meta name="description" content="Professional income tax services including ITR filing for individuals and businesses, tax planning, and notice handling. Expert CA assistance for all tax matters." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="Income Tax Services"
          subtitle="Expert ITR filing, tax planning, and compliance services for individuals and businesses"
          breadcrumb="Income Tax Services"
        />

        {/* Service Overview */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="position-relative">
                  <Image
                    src="/Logo with name.png"
                    alt="Income Tax Services"
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', borderRadius: '16px' }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                       style={{ background: 'rgba(30, 129, 205, 0.8)', borderRadius: '16px' }}>
                    <div className="text-center text-white">
                      <i className="bi bi-calculator fs-1 mb-3"></i>
                      <h3 className="fw-bold">Tax Experts</h3>
                      <p>1000+ ITRs Filed Successfully</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
                  Income Tax Services
                </p>
                <h2 className="primary-text">Professional Tax Solutions</h2>
                <p className="text-muted mt-3 mb-4">
                  Maximize your tax savings and ensure compliance with our comprehensive income tax services. 
                  From individual ITR filing to complex business tax planning, we've got you covered.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="feature-icon">
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold primary-text mb-1">100% Accurate</h6>
                        <small className="text-muted">Error-free tax calculations</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="feature-icon">
                        <i className="bi bi-piggy-bank"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold primary-text mb-1">Tax Savings</h6>
                        <small className="text-muted">Maximize your deductions</small>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-accent btn-lg">
                  Get Tax Consultation <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Slabs */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Current Tax Slabs (AY 2024-25)</h2>
              <p className="section-subtitle mt-2">
                Understanding tax rates for better planning
              </p>
            </div>
            <div className="row g-4">
              {taxSlabs.map((slab, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="service-card text-center">
                    <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(30, 129, 205, 0.1)' }}>
                      <i className="bi bi-percent primary-text"></i>
                    </div>
                    <h6 className="primary-text">{slab.income}</h6>
                    <div className="fw-bold accent-text fs-4 mb-2">{slab.rate}</div>
                    <small className="text-muted">{slab.desc}</small>
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
              <h2 className="section-title">Our Income Tax Services</h2>
              <p className="section-subtitle mt-2">
                Comprehensive tax solutions for all your needs
              </p>
            </div>
            <div className="row g-4">
              {itServices.map((service, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="service-card h-100">
                    <div className="d-flex align-items-center mb-3">
                      <div className="service-icon me-3" style={{ background: 'rgba(30, 129, 205, 0.1)' }}>
                        <i className="bi bi-file-earmark-text primary-text"></i>
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

        {/* Tax Deductions */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Popular Tax Deductions</h2>
              <p className="section-subtitle mt-2">
                Save more with these common tax deductions
              </p>
            </div>
            <div className="row g-4">
              {deductions.map((deduction, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="service-card text-center">
                    <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(60, 250, 222, 0.1)' }}>
                      <i className="bi bi-piggy-bank accent-text"></i>
                    </div>
                    <h5 className="primary-text">Section {deduction.section}</h5>
                    <div className="fw-bold secondary-text fs-5 mb-2">{deduction.limit}</div>
                    <small className="text-muted">{deduction.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))', padding: '60px 0', color: '#fff' }}>
          <div className="container text-center">
            <h2 className="fw-bold mb-3">Ready to File Your ITR?</h2>
            <p style={{ opacity: 0.85, maxWidth: 500, margin: '0 auto 28px' }}>
              Let our tax experts handle your income tax filing and maximize your savings.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link href="/contact" className="btn btn-accent btn-lg px-5">
                Get Free Tax Consultation <i className="bi bi-arrow-right ms-2"></i>
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