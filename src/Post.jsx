import { Link } from "react-router-dom";
import Like from "./Like"
export default function Post(props) {
    const {avatar, text, image, user, email, joined } = props
     return(
        <div className="tweets">
           <Link to="profil"> {avatar && <img className="icon_cnn" src={avatar} alt="image CNN"  />} </Link>
            <div>
                <div className="text">
                <h3 > {user} </h3>
                <img src="vector2.svg" alt="" />
               <span > {email} </span>
               <span> {joined} </span>
                </div>
               
                <p className="text"> {text} </p>
                {image && <img className="tweet-image" src={image} alt="" />}
               
                <Like> </Like>
            </div>

        </div>

    )


}