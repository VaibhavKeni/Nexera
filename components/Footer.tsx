import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const services = [
    { label: 'GST', href: '/services' },
    { label: 'TDS', href: '/services' },
    { label: 'Professional Tax', href: '/services' },
    { label: 'PF', href: '/services' },
    { label: 'Income Tax', href: '/services' },
    { label: 'Accounting', href: '/services' },
    { label: 'PAN Card', href: '/services' },
    { label: 'IT Services', href: '/services' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div style={{ filter: 'brightness(0) invert(1)' }}>
              <Image
                src="/Logo with name.png"
                alt="NexEra Consultants"
                height={60}
                width={240}
                style={{ objectFit: 'contain', marginBottom: 12 }}
              />
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              Your trusted partner for GST, TDS, Income Tax, Accounting, PF, PAN Card, and IT services. Simplifying compliance for businesses and individuals.
            </p>
            <div className="social-links mt-3">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <h5>Quick Links</h5>
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <Link href={l.href} key={l.label}>{l.label}</Link>
            ))}
          </div>
          <div className="col-lg-3 col-6">
            <h5>Our Services</h5>
            {services.map((s) => (
              <Link href={s.href} key={s.label}>{s.label}</Link>
            ))}
          </div>
          <div className="col-lg-3">
            <h5>Contact Info</h5>
            <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              <i className="bi bi-geo-alt me-2"></i>106-A,Siddhivinayak chs, Renuka Nagar,Kandivali west, Mumbai-400067, Maharashtra, India
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              <i className="bi bi-telephone me-2"></i>+91 98331 97647/ +91 90047 035026
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              <i className="bi bi-envelope me-2"></i>info@nexeraconsultants.com
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              <i className="bi bi-clock me-2"></i>Mon–Sat: 9 AM – 7 PM
            </p>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center">
          <span suppressHydrationWarning>© {new Date().getFullYear()} NexEra Consultants. All rights reserved.</span>
          <span>Made with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
}
