import UnorderedList from "@/components/common/UnorderedList";

export default function Footer() {
    return(
        <footer className="footer-wrapper" position="fixed">
            <div className="brand-side">
                <img src="src/assets/logo.jpg" alt="dollar-trail logo" height="200" width="200"></img>
                <h3>Dollar-trail</h3>
                <UnorderedList style={{listStyleType: 'none'}}>
                    <li>About</li>
                    <li>Contact Us</li>
                </UnorderedList>
            </div>
            <div className="pages-side">
                <UnorderedList style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Register</li>
                    <li>Dashboard</li>
                </UnorderedList>
            </div>
            <div className="copyright"></div>
        </footer>
    )
}