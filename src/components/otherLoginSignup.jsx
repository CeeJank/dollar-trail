import {Link} from 'react-router';
import {Button} from '@/components/common/Button';

export default function otherLoginSignup () {
    const launchWindow = () {
        const url = '';
        const name = "Signup Window";
        
    }

    return(
        <div>
            <Button onClick={launchWindow} >Github</Button>
            <Button onClick={launchWindow}>Google</Button>
            <Button onClick={launchWindow} >Apple</Button>
        </div>
    )
}