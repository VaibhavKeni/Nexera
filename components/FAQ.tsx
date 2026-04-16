import { useState } from 'react';

const faqs = [
  {
    question: 'What documents are required for GST registration?',
    answer: 'For GST registration, you need PAN card, Aadhaar card, business registration certificate, bank account details, business address proof, and photographs of authorized signatories.'
  },
  {
    question: 'How long does ITR filing take?',
    answer: 'Individual ITR filing typically takes 2-3 working days, while business ITR filing may take 5-7 working days depending on the complexity of your financial records.'
  },
  {
    question: 'Do you provide software training for accounting software?',
    answer: 'Yes, we provide comprehensive training for Tally Prime, QuickBooks, and other accounting software. We also offer ongoing support to ensure you can use the software effectively.'
  },
  {
    question: 'What is included in your website development service?',
    answer: 'Our website development includes responsive design, SEO optimization, content management system, contact forms, social media integration, and 1 year of free maintenance.'
  },
  {
    question: 'How do you ensure data security and confidentiality?',
    answer: 'We follow strict data protection protocols, use encrypted communication channels, secure cloud storage, and maintain complete confidentiality as per professional standards.'
  },
  {
    question: 'What are your payment terms?',
    answer: 'We offer flexible payment terms. For one-time services, 50% advance and 50% on completion. For ongoing services, monthly payments are preferred. We accept all major payment methods.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="about-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold mb-1 accent-text" style={{ letterSpacing: 2 }}>
            Got Questions?
          </p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mt-2">
            Find answers to common questions about our services
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <i className={`bi bi-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p className="mb-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}