import 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FaBook, FaHeartbeat, FaTasks, FaUserMd, FaComments } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Select a Problem',
      description: 'Explore categories like stress, anxiety, and productivity issues.',
      icon: <FaBook size={50} className="text-primary" />,
      route: '/problem-category',
      buttonText: 'Explore Problems',
    },
    {
      title: 'Best Practices',
      description: 'Discover tailored step-by-step guides for mental well-being.',
      icon: <FaTasks size={50} className="text-success" />,
      route: '/best-practices', 
      buttonText: 'View Practices',
    },
    {
      title: 'Consult a Doctor',
      description: 'Book appointments with certified professionals.',
      icon: <FaUserMd size={50} className="text-info" />,
      route: '/doctor-consultation',
      buttonText: 'Book Now',
    },
    {
      title: 'Track Your Progress',
      description: 'Monitor your activities and set reminders for tasks.',
      icon: <FaHeartbeat size={50} className="text-danger" />,
      route: '/progress',
      buttonText: 'Track Progress',
    },
    {
      title: 'Feedback',
      description: 'Share your feedback to help us improve your experience.',
      icon: <FaComments size={50} className="text-secondary" />,
      route: '/feedback',
      buttonText: 'Give Feedback',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome to Mindheal Hub</h2>
      <div className="row">
        {sections.map((section, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <Card className="shadow h-100">
              <Card.Body className="text-center">
                <div className="mb-3">{section.icon}</div>
                <Card.Title>{section.title}</Card.Title>
                <Card.Text>{section.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(section.route)}
                >
                  {section.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
