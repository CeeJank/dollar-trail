import Textinput from '@/components/common/Textinput';
import {Button} from '@/components/common/Buttons';
import OtherLoginSignup from '@/components/OtherLoginSignup';
import {useState} from  'react';

export default function Signup() {
    // states to set errors to input fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    // checks for username length
    const validateSignUp = () => {
        const errors = {};
        if (username.length == 0) errors.username = "Username cannot be empty!!"
        if (password.length == 0) errors.password = "password cannot be empty!!"
        return errors;
    }

    // validate on type for username and password, giving user feedback along if input is too short etc
    const handleUsernameChange = (e) => {
        const username = e.target.value;
        setUsername(username); // displays the input typed
        if (username.length < 8) {
            setError(prev => ({...prev, username: 'Username Too short'}));
        } else {
            setError(prev => ({...prev, username: ''}));
        }
    }

    // same as above but password
    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password); 
        if (password.length < 8) {
            setError(prev => ({...prev, password: 'password too short!'}))
        } else {
            setError(prev => ({...prev, password: ''}))
        }
    }

    const handleSubmit = () => {
        const validation = validateSignUp();

        if (Object.keys(validation).length > 0) {
                setError(validation);
                return;
        }
    }

    return (
        <>
            <h2>Sign Up</h2>
            <Textinput 
                value={username} 
                name="username"
                label="name" 
                placeholder="John Smith" 
                required 
                onChange={handleUsernameChange} 
                error={error.username}
            ></Textinput>

            <Textinput 
                value={password} 
                name="password"
                label="password" 
                placeholder="12345678" 
                required 
                onChange={handlePasswordChange} 
                error={error.password}
            ></Textinput>

            <Button className="primary" onClick = {handleSubmit}>Sign In</Button>

            <p>Other methods:</p>
            <OtherLoginSignup />
        </>
    );
}
