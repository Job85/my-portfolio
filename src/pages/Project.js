import React from "react"
import { Div } from "../components/ComopnentStyles"
// import ProjectCard from "../components/ProjectCard";
import FlipCard from '../components/FlipCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';
import pic1 from '../images/OneRingTrivia.png'
import pic2 from '../images/InventoryApp.png'
import pic3 from '../images/SoccerGramERD.png'
import { Img2 } from "./PageStyles";
import { Para } from "./PageStyles";


const cards = [
    {
        id: '1',
        variant: 'click',
        h3:
            <a
                href="https://job85.github.io/One_Ring_Trivia/" target="_blank"
            >
                One Ring Trivia
            </a>,
        front: <Img2 src={pic1} alt='LOTR' />,
        back:
            <div>
                <h3>
                    Details
                </h3>
                <Para>
                    A two player Jeopardy style game with a Tolkien theme. Players have six categories with five clues in each to choose from. Each clue is given a point value which indicates it's degree of difficulty. With each correct answer points accumulate to the respective player. Once all thirty clues have been given the player with the highest score is declared the winner!
                </Para>
                <h3>
                    Technologies
                </h3>
                <Para>
                    <ul>
                        Languages - HTML, CSS, JavaScript
                    </ul>
                </Para>
            </div>
    },
    {
        id: '2',
        variant: 'click',
        h3:
            <a
                href="https://restaurant-inventory-app.herokuapp.com/" target="_blank"
            >
                Restaurant Inventory App
            </a>,
        front: <Img2 src={pic2} alt='RIA' />,
        back:
            <div>
                <h3>
                    Details
                </h3>
                <Para>
                    A web app for the hospitality industry designed to streamline the inventory process. Using REST API's users have the ability to perform full CRUD of the items model.
                </Para>
                <h3>
                    Technologies
                </h3>
                <Para>
                    <ul>
                        Languages - HTML, CSS, JavaScript
                        Libraries - React.js
                        Frameworks - Node.js, Express, Mongoose
                        Database - MongoDB
                    </ul>
                </Para>
            </div>
    },
    {
        id: '3',
        variant: 'click',
        h3:
            <a
                href="https://guarded-ravine-20374.herokuapp.com/" target="_blank"
            >
                SoccerGram
            </a>,
        front: <Img2 src={pic3} alt='Soccer Gram' />,
        back:
            <div>
                <h3>
                    Details
                </h3>
                <Para>
                    A collabrative web app mock up of Instagram. Users can create profiles and log in via authentication through JWT with password validation and hashing. Utilizing REST API's users have the ability of full CRUD of posts.
                </Para>
                <h3>
                    Technologies
                </h3>
                <Para>
                    <ul>
                        Languages - HTML, CSS, JavaScript
                        Libraries - React.js
                        Frameworks - Node.js, Express
                        Database - PostgreSQL
                    </ul>
                </Para>
            </div>
    }
];

const Project = () => {

    return (
        <div className="container">
            <div className="row h-100">
                <div class='col d-flex flex-column flex-md-column justify-content-around align-items-center'>
                    {cards.map((card) => (
                        <FlipCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
        // <div className="container">
        //     {cards.map((card) => (
        //         <ProjectCard key={card.id} card={card} />
        //     ))}
        // </div>
    )

}

export default Project