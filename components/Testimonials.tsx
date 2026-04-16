const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    company: 'Kumar Enterprises',
    text: 'NexEra Consultants has been handling our GST and accounting for 2 years. Their expertise and timely service have saved us from many compliance issues.',
    rating: 5,
    avatar: 'RK'
  },
  {
    name: 'Priya Sharma',
    role: 'Freelancer',
    company: 'Independent Consultant',
    text: 'Excellent service for ITR filing. They helped me save significant tax through proper planning and were very professional throughout.',
    rating: 5,
    avatar: 'PS'
  },
  {
    name: 'Amit Patel',
    role: 'CA Firm Partner',
    company: 'Patel & Associates',
    text: 'We collaborate with NexEra for IT services. Their website development and digital marketing services are top-notch and very affordable.',
    rating: 5,
    avatar: 'AP'
  },
  {
    name: 'Neha Joshi',
    role: 'Startup Founder',
    company: 'TechStart Solutions',
    text: 'From company registration to ongoing compliance, NexEra has been our trusted partner. Highly recommend their comprehensive services.',
    rating: 5,
    avatar: 'NJ'
  }
];

export default function Testimonials() {
  return (
    <section className="about-section">
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
                  <div className="testimonial-avatar">
                    {testimonial.avatar}
                  </div>
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