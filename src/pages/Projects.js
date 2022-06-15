import React, { useState } from "react";
import Card from '../components/Card';
import pic1 from '../images/OneRingTrivia.png'
import pic2 from '../images/InventoryApp.png'
import pic3 from '../images/SoccerGramERD.png'
import styled from "styled-components";

const CardBox = styled.div`
    grid-area: main;
    background-color: #008000cc;

    @media (max-width: 1000px) {
        padding: 4.3rem 1.8rem;
    }
`

const H1 = styled.h1`
    color: white;
    font-size: 2rem;
    text-shadow: 
        0 1px 0 #ccc, 0 1.5px 0 #ccc,
        0 2px 0 #ccc, 0 2.5px 0 #ccc,
        0 3px 0 #ccc, 0 3.5px 0 #ccc,
        0 20px 30px rgba(153, 255, 153, 5);
`

const Img2 = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* border-radius: 2%; */
`

const Para = styled.p`
    font-size: 1em;
`

const H4 = styled.h4`
    padding-top: 1rem;
`

const A = styled.a`
    font-size: 1rem;
`

const cards = [
    {
        id: '1',
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
                <H4>Website</H4>
                <A
                    className='p-link'
                    href="https://job85.github.io/One_Ring_Trivia/" target="_blank"
                >
                    @One Ring Trivia
                </A>
            </div>
    },
    {
        id: '2',
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
                <H4>Website</H4>
                <A
                    className='p-link'
                    href="https://restaurant-inventory-app.herokuapp.com/" target="_blank"
                >
                    @Restaurant Inventory App
                </A>
            </div>
    },
    {
        id: '3',
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
                <H4>Website</H4>
                <A
                    className='p-link'
                    href="https://guarded-ravine-20374.herokuapp.com/" target="_blank"
                >
                    @SoccerGram
                </A>
            </div>
    }
];

const Projects = () => {

    return (
        <div>
            <H1>Click on card for detials</H1>
            <CardBox>
                {cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </CardBox>
        </div>
    )
}

export default Projects