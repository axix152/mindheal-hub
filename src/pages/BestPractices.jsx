import  { useState } from 'react';

const BestPractices = () => {
  const [practices, setPractices] = useState([
    { id: 1, name: 'Meditation', completed: false },
    { id: 2, name: 'Deep Breathing', completed: false },
    { id: 3, name: 'Positive Affirmations', completed: false },
    { id: 4, name: 'Time Management', completed: false },
  ]);

  const toggleCompletion = (id) => {
    setPractices((prevPractices) =>
      prevPractices.map((practice) =>
        practice.id === id
          ? { ...practice, completed: !practice.completed }
          : practice
      )
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Best Practices</h2>
      <p>Follow these practices to improve your mental well-being:</p>
      <ul className="list-group">
        {practices.map((practice) => (
          <li
            key={practice.id}
            className={`list-group-item ${
              practice.completed ? 'list-group-item-success' : ''
            } d-flex justify-content-between align-items-center`}
          >
            {practice.name}
            <button
              className={`btn ${
                practice.completed ? 'btn-danger' : 'btn-primary'
              } btn-sm`}
              onClick={() => toggleCompletion(practice.id)}
            >
              {practice.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestPractices;
