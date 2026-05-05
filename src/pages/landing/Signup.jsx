import {Textinput} from '@/components/common/Textinput';


export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validateSignUp = () => {

    }

    const handleSubmit = () => {

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

            <Button onClick = {handleSubmit}>Sign In</Button>

            <p>Other methods:</p>

        </>
    );
}
