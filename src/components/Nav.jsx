import { Link } from 'react-router-dom'
// import pic from '../HeadShot.jpeg'
const Nav = () => {

    return (
        <div>
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