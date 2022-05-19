import React from "react";
import { Paragraph } from "../components/ComopnentStyles";
import { Div } from "../components/ComopnentStyles";

const About = () => {

    return (
        <div className="content-container">
            <section>
                <Div>
                    <h3> Greetings, from sunny Florida!</h3>
                </Div>
                <div>
                    <Paragraph>
                        I'm Julian, a Full-Stack Developer from the Tampa Bay Area. And I'm here to help your organization.
                        Coming from a background in hospitality,
                        particularly special events, I know what it means to work in cooperation with others. Likewise, I bring
                        a
                        "get to yes" philosophy when it comes to gratifying clients and satisfying thier needs. Creativity
                        inspires
                        me and drives me to find resourceful methods to challenges I face.
                    </Paragraph>
                </div>
            </section>
        </div>
    )
}


export default About