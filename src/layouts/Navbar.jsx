import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Pageroutes} from '@/components/Pageroutes';
import Image from '@/components/common/Image';
import UnorderedList from '@/components/common/UnorderedList';


export default function Navbar() {
    const navbarList = ["Dashboard", "About", "more"];
    const navbarBottomList = ["Submit Feedback", "logout"];

    const navbarListItems = navbarList.map(items => <Link to={Pageroutes.items}><li className="hover:bg-sky-500">{items}</li></Link>); //if using {} use return statement to load items
    const navbarBottomListItems = navbarBottomList.map(items => <Link to={Pageroutes.items}><li className="hover:bg-sky-500">{items}</li></Link>);


    return(
        <div className="container relative flex flex-col w-80 h-screen bg-gray-300">
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

            <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-center">    
                    <UnorderedList style={{listStyleType: "none"}}>
                        {navbarListItems}
                    </UnorderedList>
                </div>

                <div className="flex justify-center text-center">
                    <UnorderedList style={{listStyleType: "none"}}>
                        {navbarBottomListItems}
                    </UnorderedList>
                </div>
            </div>
            

        </div>
    )
}