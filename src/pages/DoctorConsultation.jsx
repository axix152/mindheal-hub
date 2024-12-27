import  { useState } from 'react';

const DoctorConsultation = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, formData]);
    setFormData({ name: '', date: '', time: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Consult a Doctor</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Time</label>
          <input
            type="time"
            className="form-control"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
      </form>

      <h4>Your Appointments</h4>
      <ul className="list-group">
        {appointments.map((appointment, index) => (
          <li key={index} className="list-group-item">
            {appointment.name} - {appointment.date} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorConsultation;
