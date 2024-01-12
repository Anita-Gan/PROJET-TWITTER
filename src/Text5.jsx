export default function Text5(props) {
    return (

        <div className="tweets">
            <img src="photo chef.jpg" alt="image CNN"></img>
            <div>
                <h3 className="text">NewsAppd@</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Explicabo ipsa fugit quod culpa modi placeat labore rerum <br />autem amet, quas vero delectus est nam officia quia tempora ab ratione! Consequatur? {props.name} </p>
                <img class="tweet-image" src="photo pt.jpg" alt="" />
                <div class="tweet-action">
                    <img src="Buton.svg" alt="" />
                    <p>543 M</p>
                    <img src="Retweet.svg" alt="" />
                    <p>43 M</p>
                    <img src="Buton1.svg" alt="" />
                    <p>153 M</p>
                    <img src="Share.svg" alt="" />
                    <p>343 M</p>

                </div>
            </div>

        </div>



    )
}