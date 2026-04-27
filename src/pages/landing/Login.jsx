import {Button} from '@/components/common/Buttons';
import Textinput from '@/components/common/Textinput';
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    
    const validate = () => {
        const newErrors = {};
        if (username.length < 10) newErrors.username = "Invalid Username";
        if (password.length < 8) newErrors.password = "Invalid Password";
        return newErrors;
    };

    const handleSubmit = () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    }

    return (
        <>
        <h2>Login Page</h2>
        <img src='src/assets/logo.jpg' alt='logo of dollar trail' width="640" height="360"></img>
        <Textinput 
            value={username} 
            name="username"
            label="name" 
            placeholder="John Smith" 
            required 
            onChange={(e) => setUsername(e.target.value)} 
            error={errors.username}
        ></Textinput>

        <Textinput 
            value={password} 
            name="password"
            label="password" 
            placeholder="12345678" 
            required 
            onChange={(e) => setPassword(e.target.value)} 
            error={errors.password}
        ></Textinput>

        <p>Remember my login<input type="checkbox" name="checkbox"></input></p> 
        <Button className="primary" onClick={handleSubmit}>Login</Button>

        </>
    );
}

export default Login;