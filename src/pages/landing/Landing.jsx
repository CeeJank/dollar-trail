import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Buttons';

export default function Landing() {
    return (
        <div>
            <h1>Welcome to Dollar Trail!</h1>
            <Button className="primary" to="/login">Login</Button>
            <Button className="secondary" to="/signup">Sign Up</Button>
        </div>
    );
}

