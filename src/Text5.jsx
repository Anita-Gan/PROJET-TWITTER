import Like from "./Like"
export default function Text5(props) {
    return (

        <div className="tweets">
            <img src="photo chef.jpg" alt="image CNN"></img>
            <div>
                <h3 className="text">NewsAppd@</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Explicabo ipsa fugit quod culpa modi placeat labore rerum <br />autem amet, quas vero delectus est nam officia quia tempora ab ratione! Consequatur? {props.name} </p>
                <img className="tweet-image" src="rose.jpg" alt="" />
                
                    <Like></Like>
                
            </div>

        </div>



    )
}