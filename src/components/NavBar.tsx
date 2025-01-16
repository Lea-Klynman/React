import { useContext } from "react"
import { Link } from "react-router"
import { userContext } from "../App"

const NavBar=() => {
    const [user, userDispatch] = useContext(userContext)

    
    
    console.log(user)
    return (<>
    <nav>
        <Link to="home">Home</Link>|
        <Link to="about">About</Link>|
        <Link to={`user/${user.name?user.name:"Customer"}`}>Profile</Link>
    </nav>
    </>) 
}
export default NavBar
