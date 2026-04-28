export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      desc: 'Free consultation to understand your requirements',
      icon: 'bi-chat-dots',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop'
    },
    {
      number: '02',
      title: 'Documentation',
      desc: 'Collect and prepare all necessary documents',
      icon: 'bi-file-earmark-text',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop'
    },
    {
      number: '03',
      title: 'Processing',
      desc: 'Expert team handles all filings and submissions',
      icon: 'bi-gear',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      number: '04',
      title: 'Delivery',
      desc: 'Timely delivery with complete compliance',
      icon: 'bi-check-circle',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section 
      className="services-section"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)'
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
            How We Work
          </p>
          <h2 className="section-title">Our Simple 4-Step Process</h2>
          <p className="section-subtitle mt-2">
            From consultation to delivery, we make compliance easy and hassle-free
          </p>
        </div>
        <div className="row g-4">
          {steps.map((step, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="service-card h-100 text-center" style={{ position: 'relative', overflow: 'hidden' }}>
                <div 
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}
                >
                  {step.number}
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '16px'
                  }}
                />
                <div className="service-icon mx-auto mb-3" style={{ background: 'rgba(30, 129, 205, 0.1)' }}>
                  <i className={`bi ${step.icon} primary-text`}></i>
                </div>
                <h5 className="primary-text mb-2">{step.title}</h5>
                <p className="text-muted small mb-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
