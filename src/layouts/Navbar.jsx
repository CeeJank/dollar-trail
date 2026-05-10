import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Pageroutes} from '@/components/Pageroutes';
import Image from '@/components/common/Image';
import UnorderedList from '@/components/common/UnorderedList';


export default function Navbar() {
    const navbarList = ["Dashboard", "About", "more"];
    const navbarBottomList = ["Submit Feedback", "logout"];

    const navbarListItems = navbarList.map(items => <li>{items}</li>); //if using {} use return statement to load items
    const navbarBottomListItems = navbarBottomList.map(items => <li>{items}</li>)



    return(
        <div className="container flex flex-col w-64 h-screen">
            <div>
            <Link to={Pageroutes.Landing}>
                <Image
                    src="src/assets/logo.jpg"
                    alt="Logo"
                    width={40}
                    height={40}
                />
            </Link>
            </div>

            <div>    
            <UnorderedList style={{listStyleType: "none"}}>
                {navbarListItems}
            </UnorderedList>
            </div>

            <div>
            <UnorderedList style={{listStyleType: "none"}}>
                {navbarBottomListItems}
            </UnorderedList>
            </div>
            

        </div>
    )
}