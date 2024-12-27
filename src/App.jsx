import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProblemCategory from './pages/ProblemCategory';
import CategoryDetails from './pages/CategoryDetails';
import BestPractices from './pages/BestPractices';
import DoctorConsultation from './pages/DoctorConsultation';
import Progress from './pages/Progress';
import Feedback from './pages/Feedback';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/problem-category" element={<ProblemCategory />} />
        <Route path="/problem-category/:category" element={<CategoryDetails />} />
        <Route path="/best-practices" element={<BestPractices />} />
        <Route path="/doctor-consultation" element={<DoctorConsultation />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;
