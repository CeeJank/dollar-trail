import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Buttons';
import Footer from '@/components/common/Footer';
import Navbar from '@/layouts/Navbar';
import {Pageroutes} from '@/components/Pageroutes';
import CustomChart from '@/components/CustomChart';
import {Cards} from '@/components/common/Cards';

export default function Landing() {

    const cards = [
        {title: "Yi Long Ma", text: "This has helped me buy more Teslas!"},
        {title: "test", text: "testing"},
        {title: "test", text: "testing"}
    ] 

    const cardListing = cards.map((card) => {return <Cards title={card.title} text={card.text}/>});


    return (
        <div className="">
            <div>
            <h1>Welcome to Dollar Trail!</h1>
            <p>Your best companion to tracking expenses on the go!</p>
            <Button className="primary" to={Pageroutes.Login}>Login</Button>
            <Button className="secondary" to={Pageroutes.Signup}>Sign Up</Button>
            </div>

            <CustomChart 
                chartType="bar"
                data={{
                    labels: ['Red', 'Blue', 'Yellow'],
                    datasets: [{
                        label: 'Category',
                        data: [10,10,10],
                        borderWidth: 2
                    }]
                }}
                width="300px"
                height="300px"
                
            />
            <Cards title="test" text="testing"/>
            {cardListing}
            <Footer />
            
        </div>
    );
}

