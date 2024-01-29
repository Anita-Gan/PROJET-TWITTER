import Avatar from "./Avatar"
import Button from "./Button"
import axios from "axios"
import Post from "./Post"
import User from "./Users"
import { useEffect, useState } from 'react'

export default function Timeline() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
            .then((res) => { setPost(res.data) })

    }, [])
     const [user, setUser] = useState([]);
     useEffect(()=> {
        axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users")
    .then((res) =>{setUser(res.data)} )
     },[])
    return (
        <div className="timeline">
            <header className="container">
                <h2 className="page-title">Home</h2>
                <img className="top-tweets" src="Timeline-Prop.svg" alt="button menu" />
            </header>
            <Avatar>
                <Button />
            </Avatar>
            {post.map((data) => (<Post
                key={data.id}
                text={data.body}
                avatar={user.find((element) => element.id === data.userId)?.thumbnailProfil}
                image={data.url}
                user={user.find((element)=> element.id === data.userId)?.name } 
                email={user.find((element)=> element.id === data.userId)?.email}
                joined={user.find((element)=> element.id === data.userId)?.Joined}
                /> ))}
        </div> 
    )
}