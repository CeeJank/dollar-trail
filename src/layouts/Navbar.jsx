import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Pageroutes} from '@/components/Pageroutes';
import Image from '@/components/common/Image';

export default function Navbar() {
    return(
        <>
            <Link to={Pageroutes.Landing}>
                <Image
                    src="src/assets/logo.jpg"
                    alt="Logo"
                    width={40}
                    height={40}
                />
            </Link>
        </>
    )
}