import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Buttons';
import Footer from '@/components/common/Footer';
import Navbar from '@/layouts/Navbar';
import {Pageroutes} from '@/components/Pageroutes';
import CustomChart from '@/components/CustomChart';
import {Cards, PromoterCard} from '@/components/common/Cards';

export default function Landing() {

    const cards = [
        {title: "Person 1", text: "Text 1"},
        {title: "Person 2", text: "Text 2"},
        {title: "Person 3", text: "Text 3"},
        {title: "Person 4", text: "Text 4"}
    ] 

    const cardListing = cards.map((card) => {return <Cards title={card.title} text={card.text} width={200} height={100}/>});


    return (
        <div>
            <section className="flex flex-col w-full items-center my-10">
                <h1 className="text-7xl mb-5" >Welcome to Dollar Trail!</h1>
                <p className="text-2xl">Your best companion to tracking expenses on the go!</p>
                <div className="my-15">
                    <Button className="primary" to={Pageroutes.Login}>Login</Button>
                    <Button className="secondary" to={Pageroutes.Signup}>Sign Up</Button>
                </div>
            </section>

            <section className="flex flex-col w-full items-center my-10">
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
            </section>

            <section className="flex flex-row justify-center">
                {cardListing}
            </section>

            <div className="flex flex-row justify-center">
                <PromoterCard alt={"Image of Doge"} title="lorem ipsum" text="lorem ipsun" />
            </div>

            <Footer />
            
        </div>
    );
}

