import 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaSadTear, FaSmile, FaBriefcase, FaHeart } from 'react-icons/fa';

const ProblemCategory = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Stress', icon: <FaSadTear size={40} className="text-danger" /> },
    { name: 'Anxiety', icon: <FaHeart size={40} className="text-warning" /> },
    { name: 'Productivity', icon: <FaBriefcase size={40} className="text-primary" /> },
    { name: 'Relationships', icon: <FaSmile size={40} className="text-success" /> },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Select a Problem Category</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <Card className="shadow h-100" onClick={() => navigate(`/problem-category/${category.name.toLowerCase()}`)}>
              <Card.Body className="text-center">
                <div className="mb-3">{category.icon}</div>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>
                  Click to explore solutions and best practices for {category.name}.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemCategory;
