import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'IT Manager',
    company: 'TechNova',
    quote: 'SoftSell made it incredibly easy to recover value from our unused software licenses. Fast, secure, and reliable!',
  },
  {
    name: 'Priya Desai',
    role: 'Procurement Lead',
    company: 'NextGen Solutions',
    quote: 'Great experience! The whole process was transparent and the support team was always helpful.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-white" id="testimonials">
      <Container>
        <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>
        <Row className="justify-content-center">
          {testimonials.map((t, index) => (
            <Col md={6} key={index} className="mb-4">
              <motion.div
                className="p-4 shadow rounded bg-light h-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <p className="fst-italic text-dark">“{t.quote}”</p>
                <h6 className="mt-3 mb-0 fw-semibold">{t.name}</h6>
                <small className="text-muted">{t.role}, {t.company}</small>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
