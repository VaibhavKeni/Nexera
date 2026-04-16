import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';

const itServices = [
  {
    title: 'Website Development',
    description: 'Professional website design and development services',
    features: ['Responsive design', 'SEO optimization', 'Content management', 'E-commerce integration'],
    price: 'Starting from ₹15,999',
    timeline: '10-15 working days'
  },
  {
    title: 'Software Support',
    description: 'Technical support and maintenance for business software',
    features: ['Software installation', 'Troubleshooting', 'Updates & patches', '24/7 support'],
    price: 'Starting from ₹2,999/month',
    timeline: 'Ongoing support'
  },
  {
    title: 'Digital Marketing',
    description: 'Complete digital marketing solutions for your business',
    features: ['Social media marketing', 'Google Ads', 'SEO services', 'Content creation'],
    price: 'Starting from ₹9,999/month',
    timeline: 'Ongoing campaigns'
  },
  {
    title: 'Bulk Email Services',
    description: 'Professional email marketing and communication services',
    features: ['Email campaign design', 'List management', 'Analytics & reporting', 'Automation setup'],
    price: 'Starting from ₹1,999/month',
    timeline: 'Same day setup'
  }
];

const technologies = [
  { name: 'React/Next.js', icon: 'bi-code-slash', desc: 'Modern web development' },
  { name: 'WordPress', icon: 'bi-wordpress', desc: 'CMS development' },
  { name: 'PHP/Laravel', icon: 'bi-server', desc: 'Backend development' },
  { name: 'Mobile Apps', icon: 'bi-phone', desc: 'iOS & Android apps' }
];

const digitalServices = [
  {
    category: 'Web Development',
    services: ['Business Websites', 'E-commerce Stores', 'Portfolio Sites', 'Landing Pages']
  },
  {
    category: 'Digital Marketing',
    services: ['SEO Optimization', 'Social Media Marketing', 'Google Ads', 'Email Marketing']
  },
  {
    category: 'Software Solutions',
    services: ['Custom Software', 'Database Management', 'Cloud Solutions', 'API Integration']
  }
];

export default function ITServicesPage() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>IT Services - Website Development, Digital Marketing | NexEra Consultants</title>
        <meta name="description" content="Professional IT services including website development, software support, digital marketing, and bulk email services. Modern technology solutions for your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="IT Services"
          subtitle="Modern technology solutions - Website development, digital marketing, and software support"
          breadcrumb="IT Services"
        />

        {/* Service Overview */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="position-relative">
                  <Image
                    src="/banner.jpg"
                    alt="IT Services"
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', borderRadius: '16px' }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                       style={{ background: 'rgba(60, 250, 222, 0.8)', borderRadius: '16px' }}>
                    <div className="text-center text-white">
                      <i className="bi bi-laptop fs-1 mb-3"></i>
                      <h3 className="fw-bold">IT Experts</h3>
                      <p>100+ Projects Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
                  IT Services
                </p>
                <h2 className="primary-text">Modern Technology Solutions</h2>
                <p className="text-muted mt-3 mb-4">
                  Transform your business with our comprehensive IT services. From professional websites 
                  to digital marketing campaigns, we help you establish a strong online presence.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="feature-icon">
                        <i className="bi bi-lightning"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold primary-text mb-1">Fast Delivery</h6>
                        <small className="text-muted">Quick project turnaround</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="feature-icon">
                        <i className="bi bi-phone"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold primary-text mb-1">Mobile Friendly</h6>
                        <small className="text-muted">Responsive designs</small>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-accent btn-lg">
                  Get IT Consultation <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Technologies We Use</h2>
              <p className="section-subtitle mt-2">
                Latest technologies for modern solutions
              </p>
            </div>
            <div className="row g-4">
              {technologies.map((tech, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="service-card text-center">
                    <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(60, 250, 222, 0.1)' }}>
                      <i className={`bi ${tech.icon} accent-text`}></i>
                    </div>
                    <h5 className="primary-text">{tech.name}</h5>
                    <p className="text-muted small mb-0">{tech.desc}</p>
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
              <h2 className="section-title">Our IT Services</h2>
              <p className="section-subtitle mt-2">
                Comprehensive technology solutions for your business growth
              </p>
            </div>
            <div className="row g-4">
              {itServices.map((service, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="service-card h-100">
                    <div className="d-flex align-items-center mb-3">
                      <div className="service-icon me-3" style={{ background: 'rgba(60, 250, 222, 0.1)' }}>
                        <i className="bi bi-laptop accent-text"></i>
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

        {/* Service Categories */}
        <section className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">What We Offer</h2>
              <p className="section-subtitle mt-2">
                Detailed breakdown of our IT service categories
              </p>
            </div>
            <div className="row g-4">
              {digitalServices.map((category, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="service-card">
                    <div className="service-icon mb-3" style={{ background: 'rgba(30, 129, 205, 0.1)' }}>
                      <i className="bi bi-gear primary-text"></i>
                    </div>
                    <h5 className="primary-text mb-3">{category.category}</h5>
                    <ul className="list-unstyled">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="bi bi-check-circle accent-text me-2"></i>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="about-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Our Work Process</h2>
              <p className="section-subtitle mt-2">How we deliver exceptional IT solutions</p>
            </div>
            <div className="row g-4">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and timeline' },
                { step: '03', title: 'Development', desc: 'Building your solution with latest technologies' },
                { step: '04', title: 'Launch & Support', desc: 'Deployment and ongoing maintenance support' }
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
            <h2 className="fw-bold mb-3">Ready to Transform Your Business?</h2>
            <p style={{ opacity: 0.85, maxWidth: 500, margin: '0 auto 28px' }}>
              Let our IT experts help you build a strong digital presence and grow your business online.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link href="/contact" className="btn btn-accent btn-lg px-5">
                Get Free IT Consultation <i className="bi bi-arrow-right ms-2" />
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