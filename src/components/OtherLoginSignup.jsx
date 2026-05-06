import {Link} from 'react-router';
import {Button} from '@/components/common/Buttons';
import UnorderedList from '@/components/common/UnorderedList';

export default function OtherLoginSignup () {
    const launchWindow = () => {
        const url = '';
        const type = "popupwindow";
        const size = "width=500,height=400";
        const SignupWin = window.open(url, type, size);
        setTimeout(() => {SignupWin.close()}, 3000);
    }


    return(
        <div>
            <ul style={{listStyleType: 'none'}}>
                <li><Button onClick={launchWindow}>Github</Button></li>
                <li><Button onClick={launchWindow}>Google</Button></li>
                <li><Button onClick={launchWindow}>Apple</Button></li>
            </ul>
        </div>
    )
}