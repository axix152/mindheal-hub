import  { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}`);
    setFeedback('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">
            Your Feedback
          </label>
          <textarea
            className="form-control"
            id="feedback"
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
