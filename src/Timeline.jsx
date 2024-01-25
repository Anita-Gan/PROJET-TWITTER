// import Text1 from "./Text1"
// import Text2 from "./text2"
// import Text3 from "./text3"
// import Text4 from "./Text4"
// import Text5 from "./Text5"
import Avatar from "./Avatar"
import Button from "./Button"
import axios from "axios"
import Post from "./Post"
import { useEffect, useState } from 'react'

export default function Timeline() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
            .then((res) => { setPost(res.data) })

    }, [])
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
                avatar={data.url}
                image={data.url}
                user={data.userId} />))}
            {/* <Text1 ></Text1>
            <Text2></Text2>
            <Text3></Text3>
            <Text4></Text4>
            <Text5></Text5> */}
        </div>
    )
}