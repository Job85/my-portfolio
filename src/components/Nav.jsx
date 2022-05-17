import { Link } from 'react-router-dom'
import WebImage from '../images/WebImage'
// import pic from '../HeadShot.jpeg'
const Nav = () => {

    return (
        <div>
            <header>
                <WebImage />
            </header>
            <nav className='navbar'>
                <div>
                    <Link to='projects'>Projects</Link>
                    <Link to='about'>About</Link>
                    <Link to='resume'>Resume</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav