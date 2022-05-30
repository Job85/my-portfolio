import React from "react";
import pic1 from '../images/OneRingTrivia.png'
import pic2 from '../images/InventoryApp.png'
import pic3 from '../images/SoccerGramERD.png'
import { Img2 } from "./ComopnentStyles";
const ProjectCard = () => {

    return (
        <div>
            <div>
                <h3>
                    <a
                        href="https://job85.github.io/One_Ring_Trivia/" target="_blank"
                    >
                        One Ring Trivia
                    </a>
                </h3>
                <Img2 src={pic1} alt='LOTR' />
            </div>
            <div>
                <h3>
                    <a
                        href="https://restaurant-inventory-app.herokuapp.com/" target="_blank"
                    >
                        Restaurant Inventory App
                    </a>
                </h3>
                <Img2 src={pic2} alt='RIA' />
            </div>
            <div>
                <h3>
                    <a
                        href="https://guarded-ravine-20374.herokuapp.com/" target="_blank"
                    >
                        SoccerGram
                    </a>
                </h3>
                <Img2 src={pic3} alt='Soccer Gram' />
            </div>
        </div>
    )
}

export default ProjectCard