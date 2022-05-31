import React from "react"
import { Div } from "../components/ComopnentStyles"
import FlipCard from '../components/FlipCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';
import pic1 from '../images/OneRingTrivia.png'
import pic2 from '../images/InventoryApp.png'
import pic3 from '../images/SoccerGramERD.png'
import { Img2 } from "./PageStyles";

const cards = [
    {
        id: '1',
        variant: 'click',
        front: <Img2 src={pic1} alt='LOTR' />,
        back: 'Back'
    },
    {
        id: '2',
        variant: 'click',
        front: <Img2 src={pic2} alt='RIA' />,
        back: 'Back'
    },
    {
        id: '3',
        variant: 'click',
        front: <Img2 src={pic3} alt='Soccer Gram' />,
        back: 'Back'
    }
];

const Project = () => {

    return (
        <div className="container">
            <div className="row h-100">
                <div class='col d-flex flex-column flex-md-row justify-content-around align-items-center'>
                    {/* <Div> */}
                    {cards.map((card) => (
                        <FlipCard key={card.id} card={card} />
                    ))}
                    {/* </Div> */}
                </div>
            </div>
        </div>
    )

}

export default Project