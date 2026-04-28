const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    company: 'Kumar Enterprises',
    text: 'NexEra Consultants has been handling our GST and accounting for 2 years. Their expertise and timely service have saved us from many compliance issues.',
    rating: 5,
    avatar: 'RK',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    name: 'Priya Sharma',
    role: 'Freelancer',
    company: 'Independent Consultant',
    text: 'Excellent service for ITR filing. They helped me save significant tax through proper planning and were very professional throughout.',
    rating: 5,
    avatar: 'PS',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    name: 'Amit Patel',
    role: 'CA Firm Partner',
    company: 'Patel & Associates',
    text: 'We collaborate with NexEra for IT services. Their website development and digital marketing services are top-notch and very affordable.',
    rating: 5,
    avatar: 'AP',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
  {
    name: 'Neha Joshi',
    role: 'Startup Founder',
    company: 'TechStart Solutions',
    text: 'From company registration to ongoing compliance, NexEra has been our trusted partner. Highly recommend their comprehensive services.',
    rating: 5,
    avatar: 'NJ',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section 
      className="about-section"
      style={{
        background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.98) 0%, rgba(255, 255, 255, 0.98) 100%), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=800&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
            Client Reviews
          </p>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mt-2">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid var(--accent)'
                    }}
                  />
                  <div>
                    <div className="fw-bold primary-text">{testimonial.name}</div>
                    <small className="text-muted">{testimonial.role}</small>
                    <br />
                    <small className="accent-text">{testimonial.company}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}