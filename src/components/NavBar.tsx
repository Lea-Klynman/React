import { useContext } from "react"
import { Link } from "react-router"
import { userCotext } from "../App"

const NavBar=() => {
    const [user, userDispatch] = useContext(userCotext)
    return (<>
    <nav>
        <Link to="home">Home</Link>|
        <Link to="about">About</Link>|
        <Link to={`user/${user.name}`}>Profile</Link>
    </nav>
    </>) 
}
export default NavBar
