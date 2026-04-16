import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="badge-pill">Trusted Financial & IT Consultants</div>
            <h1>
              Your Partner in <span>Financial</span> &amp; <span>Business</span> Growth
            </h1>
            <p className="mt-3 mb-4 fs-5" style={{ opacity: 0.85 }}>
              NexEra Consultants offers end-to-end GST, TDS, Income Tax, Accounting, PF, PAN, and IT services — all under one roof.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#services" className="btn btn-accent btn-lg">
                Explore Services <i className="bi bi-arrow-right ms-1" />
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">
                Contact Us
              </a>
            </div>
            <div className="hero-stats d-flex flex-wrap gap-4 mt-5">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '8+', label: 'Services Offered' },
                { number: '5+', label: 'Years Experience' },
                { number: '100%', label: 'Compliance Rate' },
              ].map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-flex justify-content-center">
            <div className="logo-showcase-hero">
              <div
                style={{
                  width: 380,
                  height: 380,
                  borderRadius: '50%',
                  background: 'rgba(60, 250, 222, 0.1)',
                  border: '2px solid rgba(60, 250, 222, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <Image
                  src="/Logo with name.png"
                  alt="NexEra Consultants"
                  height={80}
                  width={280}
                  style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
                <div style={{ fontSize: '4rem' }}>💼</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
