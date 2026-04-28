import Image from 'next/image';

const features = [
  {
    icon: 'bi-shield-check',
    title: 'Trusted & Reliable',
    desc: '500+ satisfied clients trust us with their financial compliance'
  },
  {
    icon: 'bi-clock-history',
    title: 'On-Time Delivery',
    desc: 'Never miss a deadline with our timely filing services'
  },
  {
    icon: 'bi-people',
    title: 'Expert Team',
    desc: 'Qualified CAs and tax professionals at your service'
  },
  {
    icon: 'bi-currency-rupee',
    title: 'Affordable Pricing',
    desc: 'Transparent pricing with no hidden charges'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="about-section" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
                alt="Professional Team Working"
                style={{ 
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}
              />
              <div 
                className="position-absolute"
                style={{
                  bottom: '20px',
                  right: '20px',
                  background: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.15)'
                }}
              >
                <div className="fw-bold primary-text fs-4">500+</div>
                <small className="text-muted">Happy Clients</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
              Why Choose Us
            </p>
            <h2 className="primary-text mb-4">Your Trusted Financial Partner</h2>
            <p className="text-muted mb-4">
              At NexEra Consultants, we combine expertise with technology to deliver exceptional 
              financial and IT services. Our commitment to excellence ensures your business stays 
              compliant and grows efficiently.
            </p>
            <div className="row g-4">
              {features.map((feature, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex align-items-start gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(30, 129, 205, 0.1)',
                        flexShrink: 0
                      }}
                    >
                      <i className={`bi ${feature.icon} primary-text fs-4`}></i>
                    </div>
                    <div>
                      <h6 className="fw-bold primary-text mb-1">{feature.title}</h6>
                      <small className="text-muted">{feature.desc}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
