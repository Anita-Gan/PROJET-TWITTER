import { Link } from "react-router-dom";
import Like from "./Like"
export default function Post(props) {
    const {avatar, text, image, user, email } = props
     return(
        <div className="tweets">
           <Link to="profil"> {avatar && <img className="icon_cnn" src={avatar} alt="image CNN"  />} </Link>
            <div>
               <h3 className="text"> {user} </h3>
               <span> {email} </span>
                <p className="text"> {text} </p>
                {image && <img className="tweet-image" src={image} alt="" />}
               
                <Like> </Like>
            </div>

        </div>

    )


}