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
            <Image
              src="/Logo with name.png"
              alt="NexEra Consultants"
              height={50}
              width={170}
              style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: 12 }}
            />
            <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              Your trusted partner for GST, TDS, Income Tax, Accounting, PF, PAN Card, and IT services. Simplifying compliance for businesses and individuals.
            </p>
            <div className="social-links mt-3">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
              <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp" /></a>
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
              <i className="bi bi-geo-alt me-2" />Your City, State, India
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              <i className="bi bi-telephone me-2" />+91 XXXXX XXXXX
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              <i className="bi bi-envelope me-2" />info@nexeraconsultants.com
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              <i className="bi bi-clock me-2" />Mon–Sat: 9 AM – 7 PM
            </p>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center">
          <span>© {new Date().getFullYear()} NexEra Consultants. All rights reserved.</span>
          <span>Made with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
}
