import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Buttons';

export default function Landing() {
    return (
        <div>
            <h1>Welcome to Dollar Trail!</h1>
            <Button label="Login" variant="primary" to="/login"></Button>
            <Button label="SignUp" variant="secondary" to="/signup"></Button>
        </div>
    );
}

