import Image from 'next/image';

interface Props {
  title?: string;
  subtitle?: string;
}

export default function LogoShowcase({ 
  title = "NexEra Consultants", 
  subtitle = "Your Trusted Financial & IT Partner" 
}: Props) {
  return (
    <section className="logo-showcase">
      <div className="container">
        <div className="logo-container">
          <Image
            src="/Logo with name.png"
            alt="NexEra Consultants"
            height={80}
            width={280}
            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            priority
          />
          <h3 className="mt-3 mb-2 fw-bold">{title}</h3>
          <p className="mb-0" style={{ opacity: 0.9 }}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}