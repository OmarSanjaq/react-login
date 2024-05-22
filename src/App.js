import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import SignForm from './Components/SignUpForm/SignForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<SignForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
