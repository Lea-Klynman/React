import { useParams } from "react-router";

const User=()=>{
    const { name } = useParams();
    return (<>
    <h1> Hi {name}!</h1></>)
}
export default User