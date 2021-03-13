import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header className='header'>
            <h1>Product tree app</h1>
            <Link to="/" className='btn home'>Home</Link>
            <Link to="/new" className='btn add'>New Category</Link>
        </header>
    )
}

export default Nav
