import Link from 'next/link';

const highlights = [
  {
    title: 'GST Services',
    desc: 'Complete GST registration, filing, and compliance solutions',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop',
    link: '/services/gst',
    icon: 'bi-receipt'
  },
  {
    title: 'Income Tax',
    desc: 'Expert ITR filing and tax planning for individuals & businesses',
    image: 'https://images.unsplash.com/photo-1554224311-beee460c201f?w=600&h=400&fit=crop',
    link: '/services/income-tax',
    icon: 'bi-calculator'
  },
  {
    title: 'Accounting',
    desc: 'Professional bookkeeping and financial statement preparation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    link: '/services/accounting',
    icon: 'bi-graph-up'
  }
];

export default function ServiceHighlight() {
  return (
    <section className="about-section" style={{ background: 'linear-gradient(180deg, #fff 0%, #f8f9fa 100%)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
            Featured Services
          </p>
          <h2 className="section-title">Most Popular Services</h2>
          <p className="section-subtitle mt-2">
            Explore our most sought-after services trusted by hundreds of clients
          </p>
        </div>
        <div className="row g-4">
          {highlights.map((service, index) => (
            <div className="col-lg-4" key={index}>
              <Link href={service.link} className="text-decoration-none">
                <div 
                  className="service-card h-100" 
                  style={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    padding: 0
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '220px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    >
                      <i className={`bi ${service.icon} primary-text fs-4`}></i>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h5 className="primary-text mb-2">{service.title}</h5>
                    <p className="text-muted mb-3">{service.desc}</p>
                    <div className="accent-text fw-bold">
                      Learn More <i className="bi bi-arrow-right ms-1"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
