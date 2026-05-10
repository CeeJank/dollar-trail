import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UnorderedList from "@/components/common/UnorderedList";


export default function Footer() {
    return(
        <footer className="flex fixed bottom-0 justify-center mx-auto w-full">
            <div className="brand-side">
                <img src="src/assets/logo.jpg" alt="dollar-trail logo" height="200" width="200"></img>
                <h3>Dollar-trail</h3>
                <UnorderedList style={{listStyleType: 'none'}}>
                </UnorderedList>
            </div>
            <div className="pages-side">
                <UnorderedList style={{listStyleType: 'none'}}>
                </UnorderedList>
            </div>
            <div className="copyright"></div>
        </footer>
    )
}