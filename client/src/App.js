import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
