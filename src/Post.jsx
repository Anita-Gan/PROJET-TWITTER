import Like from "./Like"
export default function Post(props) {
    const {avatar, text, image, user } = props
     return(
        <div className="tweets">
            {avatar && <img className="icon_cnn" src={avatar} alt="image CNN"  />}
            <div>
                <h3 className="text"> {user} </h3>
                <p className="text"> {text} </p>
                {image && <img className="tweet-image" src={image} alt="" />}
                <Like> </Like>
            </div>

        </div>

    )


}