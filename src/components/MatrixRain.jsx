import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const MatrixRain = () => {
    return <div className="matrix-div"
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: 'black',
        }}
    >
        test
    </div>;
};

export default MatrixRain