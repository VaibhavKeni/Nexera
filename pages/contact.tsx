import { useEffect, useState, FormEvent } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Head>
        <title>Contact Us – NexEra Consultants</title>
        <meta name="description" content="Get in touch with NexEra Consultants for GST, TDS, Income Tax, Accounting, and IT services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="Have a question or need a service? We're here to help. Reach out and we'll respond promptly."
          breadcrumb="Contact"
        />

        <section className="contact-section">
          <div className="container">
            <div className="row g-4">
              {/* Info Cards */}
              <div className="col-lg-4">
                <div className="d-flex flex-column gap-3">
                  {[
                    { icon: 'bi-geo-alt-fill', label: 'Our Address', value: 'Your City, State, India', color: '#e8f4fd' },
                    { icon: 'bi-telephone-fill', label: 'Phone Number', value: '+91 XXXXX XXXXX', color: '#eafaf1' },
                    { icon: 'bi-envelope-fill', label: 'Email Address', value: 'info@nexeraconsultants.com', color: '#fef9e7' },
                    { icon: 'bi-clock-fill', label: 'Working Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM', color: '#fdf2f8' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="d-flex align-items-start gap-3 p-3 rounded-3"
                      style={{ background: '#fff', border: '1px solid #e8ecf0' }}
                    >
                      <div
                        style={{
                          width: 48, height: 48, borderRadius: 12,
                          background: item.color, display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <i className={`bi ${item.icon}`} style={{ color: '#1a3c6e', fontSize: '1.2rem' }} />
                      </div>
                      <div>
                        <div className="fw-semibold" style={{ fontSize: '0.82rem', color: '#888' }}>{item.label}</div>
                        <div style={{ color: '#333', fontWeight: 500 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}

                  {/* Social */}
                  <div className="p-3 rounded-3" style={{ background: '#fff', border: '1px solid #e8ecf0' }}>
                    <div className="fw-bold mb-2" style={{ color: '#1a3c6e' }}>Follow Us</div>
                    <div className="d-flex gap-2">
                      {[
                        { icon: 'bi-facebook', href: '#' },
                        { icon: 'bi-instagram', href: '#' },
                        { icon: 'bi-linkedin', href: '#' },
                        { icon: 'bi-whatsapp', href: '#' },
                      ].map((s) => (
                        <a
                          key={s.icon}
                          href={s.href}
                          style={{
                            width: 40, height: 40, borderRadius: 10,
                            background: '#1a3c6e', color: '#fff',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.1rem', textDecoration: 'none',
                          }}
                        >
                          <i className={`bi ${s.icon}`} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="col-lg-8">
                <div className="contact-card">
                  <h5 className="fw-bold mb-4" style={{ color: '#1a3c6e' }}>Send Us a Message</h5>
                  {submitted && (
                    <div className="alert alert-success">
                      ✅ Thank you! We'll get back to you shortly.
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Full Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Phone Number</label>
                        <input type="tel" className="form-control" placeholder="+91 XXXXX XXXXX" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input type="email" className="form-control" placeholder="you@example.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Service Required</label>
                        <select className="form-select" required>
                          <option value="">Select a Service</option>
                          {['GST', 'TDS', 'Professional Tax', 'PF', 'Income Tax', 'Accounting', 'PAN Card', 'IT Services'].map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Subject</label>
                        <input type="text" className="form-control" placeholder="How can we help you?" />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Message</label>
                        <textarea className="form-control" rows={5} placeholder="Describe your requirement in detail..." />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-accent px-5 py-2">
                          Send Message <i className="bi bi-send ms-2" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-4 rounded-3 overflow-hidden" style={{ height: 300, background: '#e8ecf0', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #dde2e8' }}>
              <div className="text-center text-muted">
                <i className="bi bi-map" style={{ fontSize: '3rem', color: '#1a3c6e', opacity: 0.4 }} />
                <p className="mt-2 mb-0">Google Map will be embedded here</p>
                <small>Replace this with your Google Maps embed iframe</small>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
