import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';

const accountingServices = [
  {
    title: 'Bookkeeping Services',
    description: 'Complete bookkeeping and accounting entry services',
    features: ['Daily transaction recording', 'Ledger maintenance', 'Trial balance preparation', 'Monthly reports'],
    price: 'Starting from ₹2,999/month',
    timeline: 'Daily/Weekly updates'
  },
  {
    title: 'Bank Reconciliation',
    description: 'Monthly bank reconciliation and cash flow management',
    features: ['Bank statement matching', 'Outstanding entries', 'Cash flow analysis', 'Discrepancy resolution'],
    price: 'Starting from ₹999/month',
    timeline: 'Monthly'
  },
  {
    title: 'Financial Statements',
    description: 'Preparation of comprehensive financial statements',
    features: ['Profit & Loss statement', 'Balance sheet', 'Cash flow statement', 'Notes to accounts'],
    price: 'Starting from ₹4,999',
    timeline: '7-10 working days'
  },
  {
    title: 'Account Finalization',
    description: 'Year-end account finalization and audit preparation',
    features: ['Account closing entries', 'Depreciation calculation', 'Provision entries', 'Audit trail preparation'],
    price: 'Starting from ₹7,999',
    timeline: '10-15 working days'
  }
];

const softwareExpertise = [
  { name: 'Tally Prime', icon: 'bi-calculator', desc: 'Complete Tally implementation and support' },
  { name: 'QuickBooks', icon: 'bi-graph-up', desc: 'QuickBooks setup and maintenance' },
  { name: 'Zoho Books', icon: 'bi-cloud', desc: 'Cloud-based accounting solutions' },
  { name: 'Excel', icon: 'bi-table', desc: 'Advanced Excel for accounting' }
];

const reportTypes = [
  { type: 'Monthly Reports', items: ['P&L Statement', 'Balance Sheet', 'Cash Flow', 'Expense Analysis'] },
  { type: 'Quarterly Reports', items: ['Comparative Analysis', 'Budget vs Actual', 'Ratio Analysis', 'Trend Reports'] },
  { type: 'Annual Reports', items: ['Annual Accounts', 'Tax Computation', 'Audit Reports', 'Compliance Reports'] }
];

export default function AccountingPage() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>Accounting Services - Bookkeeping, Financial Statements | NexEra Consultants</title>
        <meta name="description" content="Professional accounting services including bookkeeping, bank reconciliation, financial statements, and account finalization. Expert Tally and QuickBooks support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="Accounting Services"
          subtitle="Professional bookkeeping, financial reporting, and accounting solutions for your business"
          breadcrumb="Accounting Services"
        />

        {/* Service Overview */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
                  Accounting Services
                </p>
                <h2 className="primary-text">Professional Accounting Solutions</h2>
                <p className="text-muted mt-3 mb-4">
                  Keep your finances organized and compliant with our comprehensive accounting services. 
                  From daily bookkeeping to annual account finalization, we ensure accuracy and transparency.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="feature-icon">
                        <i className="bi bi-graph-up"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold primary-text mb-1">Real-time Reports</h6>
                        <small className="text-muted">Get updated financial reports</small>
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
                        <small className="text-muted">Error-free accounting</small>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-accent btn-lg">
                  Get Accounting Support <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <Image
                    src="/banner.jpg"
                    alt="Accounting Services"
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', borderRadius: '16px' }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                       style={{ background: 'rgba(6, 61, 117, 0.8)', borderRadius: '16px' }}>
                    <div className="text-center text-white">
                      <i className="bi bi-calculator fs-1 mb-3"></i>
                      <h3 className="fw-bold">Accounting Experts</h3>
                      <p>200+ Businesses Managed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Expertise */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Software Expertise</h2>
              <p className="section-subtitle mt-2">
                We work with all major accounting software platforms
              </p>
            </div>
            <div className="row g-4">
              {softwareExpertise.map((software, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="service-card text-center">
                    <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(30, 129, 205, 0.1)' }}>
                      <i className={`bi ${software.icon} primary-text`}></i>
                    </div>
                    <h5 className="primary-text">{software.name}</h5>
                    <p className="text-muted small mb-0">{software.desc}</p>
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
              <h2 className="section-title">Our Accounting Services</h2>
              <p className="section-subtitle mt-2">
                Comprehensive accounting solutions for businesses of all sizes
              </p>
            </div>
            <div className="row g-4">
              {accountingServices.map((service, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="service-card h-100">
                    <div className="d-flex align-items-center mb-3">
                      <div className="service-icon me-3" style={{ background: 'rgba(6, 61, 117, 0.1)' }}>
                        <i className="bi bi-calculator secondary-text"></i>
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

        {/* Report Types */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Financial Reports We Provide</h2>
              <p className="section-subtitle mt-2">
                Comprehensive reporting for better business decisions
              </p>
            </div>
            <div className="row g-4">
              {reportTypes.map((report, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="service-card">
                    <div className="service-icon mb-3" style={{ background: 'rgba(60, 250, 222, 0.1)' }}>
                      <i className="bi bi-file-earmark-bar-graph accent-text"></i>
                    </div>
                    <h5 className="primary-text mb-3">{report.type}</h5>
                    <ul className="list-unstyled">
                      {report.items.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="bi bi-check-circle accent-text me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
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
              <h2 className="section-title">Our Accounting Process</h2>
              <p className="section-subtitle mt-2">Streamlined process for accurate accounting</p>
            </div>
            <div className="row g-4">
              {[
                { step: '01', title: 'Data Collection', desc: 'Gather all financial documents and transactions' },
                { step: '02', title: 'Entry & Recording', desc: 'Accurate data entry in accounting software' },
                { step: '03', title: 'Reconciliation', desc: 'Bank and account reconciliation' },
                { step: '04', title: 'Reporting', desc: 'Generate comprehensive financial reports' }
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
            <h2 className="fw-bold mb-3">Need Professional Accounting Support?</h2>
            <p style={{ opacity: 0.85, maxWidth: 500, margin: '0 auto 28px' }}>
              Let our accounting experts manage your books while you focus on growing your business.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link href="/contact" className="btn btn-accent btn-lg px-5">
                Get Free Consultation <i className="bi bi-arrow-right ms-2" />
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