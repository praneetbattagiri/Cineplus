// import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import PaymentPage from './components/payment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/payment" element={<PaymentPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
