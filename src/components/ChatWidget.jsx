import React, { useState } from 'react';
import { Button, Form, Card, Collapse, Spinner, Badge } from 'react-bootstrap';
import { FaRobot, FaComments } from 'react-icons/fa';

const useMock = true; // Set false to use real OpenAI API

const exampleQuestions = [
  {
    q: 'How do I sell my license?',
    a: 'Just upload your software license, our system will value it, and you get paid after validation.'
  },
  {
    q: 'What types of licenses do you accept?',
    a: 'We accept Microsoft, Adobe, Autodesk, and other genuine transferable software licenses.'
  },
  {
    q: 'How long does the process take?',
    a: 'Typically, the entire process takes 2-3 business days including license validation and payment.'
  }
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setResponse('');

    if (useMock) {
      // Return hardcoded answers if question matches
      const match = exampleQuestions.find(q => q.q.toLowerCase() === message.toLowerCase());
      setTimeout(() => {
        setResponse(match ? match.a : 'This is a mock response. Try another question.');
        setLoading(false);
      }, 800);
    } else {
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
            temperature: 0.7,
          }),
        });

        const data = await res.json();
        const aiMessage = data.choices?.[0]?.message?.content || 'Sorry, I couldn’t understand.';
        setResponse(aiMessage);
      } catch (err) {
        setResponse('Sorry, I couldn’t get a response from the server.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <Button
        variant={open ? 'danger' : 'primary'}
        onClick={() => setOpen(!open)}
        aria-controls="chat-widget"
        aria-expanded={open}
        className="rounded-circle shadow"
        style={{ width: '60px', height: '60px' }}
      >
        <FaComments size={22} />
      </Button>

      <Collapse in={open}>
        <div id="chat-widget" className="mt-3">
          <Card className="shadow-lg border-0" style={{ width: '300px' }}>
            <Card.Header className="bg-primary text-white d-flex align-items-center">
              <FaRobot className="me-2" />
              Chat with Us
              <Badge bg="light" text="dark" className="ms-auto">Beta</Badge>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Ask a question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="success" onClick={handleSend} disabled={loading}>
                  {loading ? <Spinner size="sm" animation="border" /> : 'Send'}
                </Button>
              </div>
              <hr />
              <div style={{ fontSize: '0.9rem' }}>
                {response && (
                  <div className="mt-2">
                    <strong>AI:</strong> {response}
                  </div>
                )}
              </div>

              <div className="mt-3">
                <small className="text-muted">Try these:</small>
                {exampleQuestions.map((item, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline-secondary"
                    className="me-2 mt-2"
                    onClick={() => {
                      setMessage(item.q);
                      setTimeout(() => handleSend(), 300);
                    }}
                  >
                    {item.q}
                  </Button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </Collapse>
    </div>
  );
};

export default ChatWidget;
