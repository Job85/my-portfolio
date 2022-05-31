import pic1 from '../images/OneRingTrivia.png'
import { Img2 } from './ComopnentStyles';
import { useState } from 'react';
import cn from 'classnames'
import { BsCardChecklist } from 'react-icons/bs';

const FlipCard = ({ card }) => {

    const [showBack, setShowBack] = useState(false);

    const handleClick = () => {
        if (card.variant === 'click') {
            setShowBack(!showBack);
        }
    }

    return (
        <div
            className="flip-card-outer"
            onClick={handleClick}
        >
            <div
                className={cn("flip-card-inner", {
                    showBack,
                    'hover-trigger': BsCardChecklist.variant === 'hover'
                })}>
                <div className="card front">
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <p className="card-text fs-1 fw-bold">
                            {card.front}
                        </p>
                    </div>
                </div>
                <div className="card back">
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <p className="card-text fs-1 fw-bold">
                            {card.back}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard