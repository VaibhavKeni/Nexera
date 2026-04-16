import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        transparent ? 'navbar-transparent' : 'bg-white shadow-sm'
      }`}
      style={{ transition: 'background 0.3s, box-shadow 0.3s' }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand p-0">
          <Image
            src="/Logo with name.png"
            alt="NexEra Consultants"
            height={52}
            width={180}
            style={{ objectFit: 'contain', filter: transparent ? 'brightness(0) invert(1)' : 'none' }}
            priority
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <i className={`bi bi-list fs-3`} style={{ color: transparent ? '#fff' : '#1e81cd' }} />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center gap-1">
            {navLinks.map((item) => {
              const active = router.pathname === item.href;
              return (
                <li className="nav-item" key={item.label}>
                  <Link
                    href={item.href}
                    className={`nav-link px-3 fw-semibold ${
                      active ? 'nav-link-active' : ''
                    }`}
                    style={{ color: transparent ? 'rgba(255,255,255,0.92)' : active ? '#1e81cd' : '#444' }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item ms-2">
              <Link href="/contact" className="btn btn-accent btn-sm px-4">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
