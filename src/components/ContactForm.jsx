import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    const allFilled = Object.values(formData).every(Boolean);
    if (allFilled) {
      console.log('Submitted Data:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
      setValidated(false);
    }
  };

  return (
    <section className="py-5 bg-light" id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center fw-bold mb-4">Get In Touch</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Your full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Your company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Please enter your company name.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="licenseType">
                  <Form.Label>License Type</Form.Label>
                  <Form.Select
                    required
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                  >
                    <option value="">Select a license type</option>
                    <option value="Operating System">Operating System</option>
                    <option value="Productivity Suite">Productivity Suite</option>
                    <option value="Security Software">Security Software</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">Please choose a license type.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={4}
                    placeholder="Write your message..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col className="text-center">
                <Button variant="primary" type="submit" className="px-5 mt-3">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>

          {submitted && (
            <Alert variant="success" className="mt-4 text-center">
              ✅ Your message has been submitted successfully!
            </Alert>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactForm;
