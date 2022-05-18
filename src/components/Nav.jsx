import { Link } from 'react-router-dom'
// import pic from '../HeadShot.jpeg'
const Nav = () => {

    return (
        <div className='nav'>
            <nav className='navbar'>
                <div>
                    <Link to='projects'>Projects</Link>
                    <Link to='about'>About</Link>
                    <a href='https://docs.google.com/document/d/e/2PACX-1vSiBcnyO1rayLM3WTUw2zhnm5lqbf3cd5wkEdOO3V1gzI2n8FyTaSRQ1wl8E-XH3GhEvEE2c9FnOLAl/pub' target='_blank'>Resume</a>
                </div>
            </nav>
        </div>
    )
}

export default Nav