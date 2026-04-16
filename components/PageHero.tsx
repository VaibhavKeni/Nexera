import Link from 'next/link';

interface Props {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="page-hero">
      <div className="container text-center">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
            </li>
            <li className="breadcrumb-item active" style={{ color: 'var(--accent)' }}>{breadcrumb}</li>
          </ol>
        </nav>
        <h1 className="fw-bold mb-3">{title}</h1>
        <p style={{ opacity: 0.85, maxWidth: 600, margin: '0 auto', fontSize: '1.1rem' }}>{subtitle}</p>
      </div>
    </section>
  );
}
