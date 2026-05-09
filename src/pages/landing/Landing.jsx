import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Buttons';
import Footer from '@/components/common/Footer';
import Navbar from '@/layouts/Navbar';
import {Pageroutes} from '@/components/Pageroutes';

export default function Landing() {
    return (
        <div>
            <Navbar />
            <h1>Welcome to Dollar Trail!</h1>
            <p>Your best companion to tracking expenses on the go!</p>
            <Button className="primary" to={Pageroutes.Login}>Login</Button>
            <Button className="secondary" to={Pageroutes.Signup}>Sign Up</Button>

            <Footer />
            
        </div>
    );
}

