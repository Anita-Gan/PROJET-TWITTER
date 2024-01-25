import Like from "./Like"
export default function Text2(props) {
    return (

        <div className="tweets">
            <img className="icon_cnn" src="rose2.jpg" alt="image CNN"></img>
            <div>
                <h3 className="text">NewsAppd@</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Explicabo ipsa fugit quod culpa modi placeat labore rerum <br />autem amet, quas vero delectus est nam officia quia tempora ab ratione! Consequatur? {props.name} </p>
                <img className="tweet-image" src="pht peinture.jpg" alt="" />
                <Like></Like>
            </div>

        </div>



    )
}