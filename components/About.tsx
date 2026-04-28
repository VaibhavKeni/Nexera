import Link from 'next/link';
import Image from 'next/image';

const features = [
  { icon: 'bi-shield-check', title: 'Fully Compliant', desc: 'We ensure 100% compliance with all government regulations and deadlines.' },
  { icon: 'bi-people', title: 'Expert Team', desc: 'Qualified CAs, tax professionals, and IT experts with years of experience.' },
  { icon: 'bi-clock-history', title: 'Timely Delivery', desc: 'We value your time — all filings and services delivered on schedule.' },
  { icon: 'bi-headset', title: 'Dedicated Support', desc: 'Personalized support and consultation available whenever you need it.' },
];

export { features };

export default function About({ preview }: { preview?: boolean }) {
  return (
    <section 
      className="about-section" 
      id="about"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div
              style={{
                background: 'linear-gradient(135deg, var(--secondary), var(--primary))',
                borderRadius: 24,
                padding: '48px 36px',
                color: '#fff',
                position: 'relative',
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <div style={{ filter: 'brightness(0) invert(1)' }}>
                  <Image
                    src="/Logo with name.png"
                    alt="NexEra Consultants"
                    height={60}
                    width={240}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
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
            <p className="text-uppercase fw-bold mb-1" style={{ color: 'var(--primary)', letterSpacing: 2 }}>
              About Us
            </p>
            <h2>Simplifying Compliance &amp; Empowering Businesses</h2>
            <p className="text-muted mt-3 mb-4">
              At NexEra Consultants, we believe that every business deserves expert financial guidance without the complexity. From GST filings to website development, we handle it all so you can focus on growing your business.
            </p>
            <div>
              {features.map((f) => (
                <div className="feature-item" key={f.title}>
                  <div className="feature-icon">
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <div>
                    <div className="fw-bold" style={{ color: 'var(--primary)' }}>{f.title}</div>
                    <div className="text-muted" style={{ fontSize: '0.9rem' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {preview && (
              <div className="mt-4">
                <Link href="/about" className="btn btn-primary-custom px-5 py-2">
                  Learn More About Us <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
