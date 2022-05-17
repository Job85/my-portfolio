import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className='navbar'>
            <div>
                <Link to='projects'>Projects</Link>
                <Link to='about'>About</Link>
                <Link to='resume'>Resume</Link>
            </div>
        </nav>
    )
}

export default Nav