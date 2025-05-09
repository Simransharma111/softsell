import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaTags, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt size={40} className="text-primary mb-3" />,
    title: 'Secure & Trusted',
    desc: 'Your license data is encrypted and handled with care.',
  },
  {
    icon: <FaClock size={40} className="text-success mb-3" />,
    title: 'Quick Turnaround',
    desc: 'Get your quote and payment faster than ever.',
  },
  {
    icon: <FaTags size={40} className="text-warning mb-3" />,
    title: 'Best Market Value',
    desc: 'We ensure top value offers for your licenses.',
  },
  {
    icon: <FaHeadset size={40} className="text-danger mb-3" />,
    title: 'Dedicated Support',
    desc: 'Need help? We’re here 24/7 for your questions.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-light" id="why-us">
      <Container>
        <h2 className="text-center fw-bold mb-4">Why Choose Us</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md={6} lg={3} className="mb-4 text-center" key={index}>
              <motion.div
                className="p-4 shadow rounded bg-white h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {feature.icon}
                <h5 className="fw-semibold">{feature.title}</h5>
                <p className="text-muted">{feature.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
