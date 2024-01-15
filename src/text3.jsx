export default function Text3(props) {
    return (

        <div className="tweets">
            <img src="image 1(2).png " alt="" />
            <div>
                <h3 className="text">Twitter</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Ex libero rerum placeat, vero omnis fugiat sit eos natus tenetur aspernatur architecto aperiam dicta incidunt nam delectus adipisci repellendus facilis ducimus!</p>
                <div class="tweet-action">
                    <img src="Buton.svg" alt="" />
                    <p>123 M</p>
                    <img src="Retweet.svg" alt="" />
                    <p>123 M</p>
                    <img src="Buton1.svg" alt="" />
                    <p>123 M</p>
                    <img src="Share.svg" alt="" />
                    {props.children}
                </div>
            </div>

        </div>
    )
}