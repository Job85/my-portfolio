import React from "react"
import { Div } from "../components/ComopnentStyles"
import FlipCard from '../components/FlipCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const cards = [
    {
        id: '1',
        variant: 'hover',
        front: 'Hover',
        back: 'Back'
    },
    {
        id: '2',
        variant: 'click',
        front: 'Click',
        back: 'Back'
    },
    {
        id: '3',
        variant: 'focus',
        front: 'Focus',
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