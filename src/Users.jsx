import { Link } from "react-router-dom";
export default function User(){
    const{user1, name, username, email}= props
    return(
        <>
        <h3> {user1} </h3>
        <span> {name} </span>
        <span> {username} </span>
        <span> {email} </span>
        <img src= {avatar} alt="" srcset="" />
        </>
    )
}