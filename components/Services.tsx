import Link from 'next/link';

const services = [
  {
    icon: '🧾',
    color: '#e8f4fd',
    title: 'GST',
    items: ['Return Filing', 'Registration', 'GST Notice', 'Refund Application', 'Closure Procedure', 'Advisory Services'],
    link: '/services/gst'
  },
  {
    icon: '📋',
    color: '#fef9e7',
    title: 'TDS',
    items: ['TDS Return Filing (26Q / 26QB)', 'TDS Challan & Challan Payment', 'TDS Correction'],
    link: '/services/tds'
  },
  {
    icon: '🏛️',
    color: '#eafaf1',
    title: 'Professional Tax',
    items: ['Filing', 'Payment'],
    link: '/services'
  },
  {
    icon: '🏦',
    color: '#fdf2f8',
    title: 'PF (Provident Fund)',
    items: ['Transfer', 'Withdrawal'],
    link: '/services'
  },
  {
    icon: '💰',
    color: '#fef5e4',
    title: 'Income Tax',
    items: ['Filing – Individual & Company', 'Tax Planning Consultation', 'ITR Notice', 'Registration'],
    link: '/services/income-tax'
  },
  {
    icon: '📊',
    color: '#eaf4fb',
    title: 'Accounting',
    items: ['Accounting Entry', 'Bank Reconciliation', 'Sales / Purchase / Payment / Receipt Entries', 'Account Finalisation'],
    link: '/services/accounting'
  },
  {
    icon: '🪪',
    color: '#f9ebea',
    title: 'PAN Card',
    items: ['Application', 'Correction', 'Aadhar PAN Linking'],
    link: '/services/pan-card'
  },
  {
    icon: '💻',
    color: '#eaf0fb',
    title: 'IT Services',
    items: ['Website Development', 'Software Support', 'Digital Marketing', 'Bulk Emailing'],
    link: '/services/it-services'
  },
];

export { services };

export default function Services({ preview }: { preview?: boolean }) {
  const displayed = preview ? services.slice(0, 4) : services;

  return (
    <section 
      className="services-section" 
      id="services"
      style={{
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold mb-1" style={{ color: 'var(--primary)', letterSpacing: 2 }}>
            What We Offer
          </p>
          <h2 className="section-title">{preview ? 'Our Key Services' : 'Services We Provide'}</h2>
          <p className="section-subtitle mt-2">
            Comprehensive financial, compliance, and technology solutions tailored for individuals and businesses.
          </p>
        </div>
        <div className="row g-4">
          {displayed.map((s) => (
            <div className={`col-sm-6 ${preview ? 'col-lg-3' : 'col-lg-3'}`} key={s.title}>
              <Link href={s.link} className="text-decoration-none">
                <div className="service-card h-100" style={{ 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent'
                }}>
                  <div className="service-icon" style={{ 
                    background: s.color,
                    fontSize: '2.5rem',
                    marginBottom: '16px'
                  }}>
                    {s.icon}
                  </div>
                  <h5 style={{ color: 'var(--primary)', marginBottom: '12px' }}>{s.title}</h5>
                  <ul style={{ fontSize: '0.9rem' }}>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-3">
                    <small className="accent-text fw-bold">
                      Learn More <i className="bi bi-arrow-right ms-1"></i>
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {preview && (
          <div className="text-center mt-5">
            <Link href="/services" className="btn btn-primary-custom px-5 py-2">
              View All Services <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
