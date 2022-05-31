import { ProjectContainer } from "./ComopnentStyles"
import { CardInner } from "./ComopnentStyles"


const ProjectCard = ({ card }) => {

    return (
        <ProjectContainer>
            <h3>
                {card.h3}
            </h3>
            <CardInner>
                <div className="project-card-front">
                    <div>
                        {card.front}
                    </div>
                </div>
                <div className="project-card-back">
                    {card.back}
                </div>
            </CardInner>
        </ProjectContainer>
    )
}

export default ProjectCard