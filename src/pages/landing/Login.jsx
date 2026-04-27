import {Button} from '@/components/common/Buttons';
import Textinput from '@/components/common/Textinput';

function Login() {
    return (
        <>
        <h2>Login Page</h2>
        <Textinput name="username" label="name" placeholder="John Smith" minLength="10" required></Textinput>
        <Textinput name="password" labe="password" placeholder="12345678" minLength="8" required></Textinput>
        <p>Remember my login<input type="checkbox" name="checkbox"></input></p> 
        <Button className="primary">Login</Button>

        </>
    );
}

export default Login;