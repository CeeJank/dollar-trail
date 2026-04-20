import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from '@/components/common/Header';
import Landing from '@/pages/landing/Landing';
import Login from '@/pages/landing/Login';
import Signup from '@/pages/landing/Signup';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </BrowserRouter>
    </>



  );
  
}

export default App;
