import Like from "./Like"
export default function Text1(props) {
    return (

        <div className="tweets">
            <img src="rose.jpg" alt="image CNN" />
            <div>
                <h3 className="text">Hello World@</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Explicabo ipsa fugit quod culpa modi placeat labore rerum <br />autem amet, quas vero delectus est nam officia quia tempora ab ratione! Consequatur? {props.name} </p>
                <Like></Like>
            </div>

        </div>
    )
}