import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section 
      className="contact-section" 
      id="contact"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)'
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold mb-1" style={{ color: 'var(--primary)', letterSpacing: 2 }}>
            Get In Touch
          </p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle mt-2">
            Have a question or need a service? Reach out and we'll get back to you promptly.
          </p>
        </div>
        <div className="row g-4">
          {/* Info */}
          <div className="col-lg-4">
            <div className="contact-card h-100">
              <h5 className="fw-bold mb-4" style={{ color: 'var(--primary)' }}>Our Information</h5>
              {[
                { icon: 'bi-geo-alt', label: 'Address', value: '106-A,Siddhivinayak chs, Renuka Nagar,Kandivali west, Mumbai-400067, Maharashtra, India' },
                { icon: 'bi-telephone', label: 'Phone', value: '+91 98331 97647/ +91 90047 035026' },
                { icon: 'bi-envelope', label: 'Email', value: 'info@nexeraconsultants.com' },
                { icon: 'bi-clock', label: 'Working Hours', value: 'Mon–Sat: 10:00 AM – 7:00 PM' },
              ].map((item) => (
                <div className="contact-info-item" key={item.label}>
                  <div className="contact-info-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <div className="fw-semibold" style={{ fontSize: '0.85rem', color: '#888' }}>{item.label}</div>
                    <div style={{ color: '#333' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-8">
            <div className="contact-card">
              <h5 className="fw-bold mb-4" style={{ color: 'var(--primary)' }}>Send Us a Message</h5>
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
                    <label className="form-label fw-semibold">Message</label>
                    <textarea className="form-control" rows={4} placeholder="Describe your requirement..." />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-accent px-5 py-2">
                      Send Message <i className="bi bi-send ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
