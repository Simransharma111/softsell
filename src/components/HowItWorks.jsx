import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUpload, FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUpload size={40} className="text-primary mb-3" />,
    title: 'Upload License',
    desc: 'Submit your unused software license details securely.',
  },
  {
    icon: <FaCalculator size={40} className="text-success mb-3" />,
    title: 'Get Valuation',
    desc: 'We’ll estimate your license’s market value.',
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-warning mb-3" />,
    title: 'Get Paid',
    desc: 'Accept the offer and receive payment quickly.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-5 bg-white" id="how-it-works" data-aos="zoom-in">
      <Container>
        <h2 className="text-center fw-bold mb-4">How It Works</h2>
        <Row className="text-center">
          {steps.map((step, index) => (
            <Col md={4} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {step.icon}
                <h5 className="fw-semibold">{step.title}</h5>
                <p className="text-muted">{step.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
