import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from '@/components/common/Header';
import Landing from '@/pages/landing/Landing';
import Login from '@/pages/landing/Login';
import Signup from '@/pages/landing/Signup';
import Dashboard from '@/pages/home/Dashboard';
import {Pageroutes} from '@/components/Pageroutes';
import Chart from 'chart.js/auto';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={Pageroutes.Login} element={<Login />} />
        <Route path={Pageroutes.Signup} element={<Signup />} />
        <Route path={Pageroutes.Dashboard} element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
    </>



  );
  
}

export default App;
