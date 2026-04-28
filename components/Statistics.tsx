const stats = [
  { number: '500+', label: 'Happy Clients', icon: 'bi-people' },
  { number: '1000+', label: 'Returns Filed', icon: 'bi-file-earmark-text' },
  { number: '8+', label: 'Services Offered', icon: 'bi-gear' },
  { number: '5+', label: 'Years Experience', icon: 'bi-calendar-check' },
  { number: '100%', label: 'Compliance Rate', icon: 'bi-shield-check' },
  { number: '24/7', label: 'Support Available', icon: 'bi-headset' }
];

export default function Statistics() {
  return (
    <section 
      className="stats-section"
      style={{
        background: 'linear-gradient(135deg, rgba(30, 129, 205, 0.95) 0%, rgba(6, 61, 117, 0.95) 100%), url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Our Track Record</h2>
          <p style={{ opacity: 0.9, maxWidth: 600, margin: '0 auto' }}>
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </div>
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div className="col-sm-6 col-lg-2" key={index}>
              <div className="stat-card">
                <i className={`bi ${stat.icon} fs-2 mb-3 d-block`} style={{ color: 'var(--accent)' }}></i>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}