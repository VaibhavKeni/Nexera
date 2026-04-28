import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, rgba(6, 61, 117, 0.95) 0%, rgba(30, 129, 205, 0.9) 100%), url("https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=800&fit=crop")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '80px 0', 
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Ready to Simplify Your Compliance?
            </h2>
            <p style={{ opacity: 0.9, fontSize: '1.1rem', marginBottom: '32px' }}>
              Join 500+ businesses who trust NexEra Consultants for their financial, 
              tax, and IT needs. Get started today with a free consultation.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-accent btn-lg px-5">
                Get Free Consultation <i className="bi bi-arrow-right ms-2"></i>
              </Link>
              <Link href="/services" className="btn btn-outline-light btn-lg px-5">
                View All Services
              </Link>
            </div>
            <div className="d-flex flex-wrap gap-4 mt-4">
              <div>
                <div className="fw-bold fs-4" style={{ color: 'var(--accent)' }}>500+</div>
                <small style={{ opacity: 0.85 }}>Happy Clients</small>
              </div>
              <div>
                <div className="fw-bold fs-4" style={{ color: 'var(--accent)' }}>100%</div>
                <small style={{ opacity: 0.85 }}>Compliance Rate</small>
              </div>
              <div>
                <div className="fw-bold fs-4" style={{ color: 'var(--accent)' }}>24/7</div>
                <small style={{ opacity: 0.85 }}>Support Available</small>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '40px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div style={{ filter: 'brightness(0) invert(1)' }}>
                <Image
                  src="/Logo with name.png"
                  alt="NexEra Consultants"
                  width={400}
                  height={150}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="mt-4 text-center">
                <div className="d-flex justify-content-around">
                  <div>
                    <i className="bi bi-check-circle fs-1 mb-2 d-block" style={{ color: 'var(--accent)' }}></i>
                    <small>Certified</small>
                  </div>
                  <div>
                    <i className="bi bi-award fs-1 mb-2 d-block" style={{ color: 'var(--accent)' }}></i>
                    <small>Trusted</small>
                  </div>
                  <div>
                    <i className="bi bi-lightning fs-1 mb-2 d-block" style={{ color: 'var(--accent)' }}></i>
                    <small>Fast</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
