import { useState } from "react";
import cn from 'classnames'

const ProjectCard = ({ card }) => {

    const [showBack, setShowBack] = useState(false);

    const handleClick = () => {
        if (card.variant === 'click') {
            setShowBack(!showBack);
        }
    }

    return (
        <div className="card-container">
            <div
                className="card-outer"
                onClick={handleClick}
            >
                <div
                    className={cn('card-inner', {
                        showBack
                    })}
                >
                    <div className="card-front">
                        <div className="card-body">
                            {card.front}
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-body">
                            {card.back}
                        </div>
                        <a className="card-h3">
                            {card.h3}
                        </a>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default ProjectCard