export default function Text2(props) {
    return (

        <div className="tweets">
            <img className="icon_cnn" src="rose2.jpg" alt="image CNN"></img>
            <div>
                <h3 className="text">NewsAppd@</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Explicabo ipsa fugit quod culpa modi placeat labore rerum <br />autem amet, quas vero delectus est nam officia quia tempora ab ratione! Consequatur? {props.name} </p>
                <img class="tweet-image" src="pht peinture.jpg" alt="" />
                <div class="tweet-action">
                    <img src="Buton.svg" alt="" />
                    <p>235 M</p>
                    <img src="Retweet.svg" alt="" />
                    <p>135 M</p>
                    <img src="Buton1.svg" alt="" />
                    <p>535 M</p>
                    <img src="Share.svg" alt="" />
                    <p>235 M</p>

                </div>
            </div>

        </div>



    )
}