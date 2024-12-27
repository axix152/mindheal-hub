import 'react';

const Progress = () => {
  const progressData = [
    { id: 1, task: 'Meditation Session', status: 'Completed' },
    { id: 2, task: 'Time Management Workshop', status: 'In Progress' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Track Your Progress</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {progressData.map((item) => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>
                <span
                  className={`badge ${
                    item.status === 'Completed'
                      ? 'bg-success'
                      : 'bg-warning text-dark'
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Progress;
