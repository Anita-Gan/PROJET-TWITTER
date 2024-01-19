
export default function Text1(props) {
    return (

        <div className="tweets">
            <img src="rose.jpg" alt="image CNN"/>
            <div>
                <h3 className="text">Hello World@</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Explicabo ipsa fugit quod culpa modi placeat labore rerum <br/>autem amet, quas vero delectus est nam officia quia tempora ab ratione! Consequatur? {props.name} </p>
                <div className="tweet-action">
                    <img src="Buton.svg" alt=""/>
                    <p>234 M</p>
                    <img src="Retweet.svg" alt=""/>
                    <p>634 M</p>
                    <img src="Buton1.svg" alt=""/>
                    <p>34 M</p>
                    <img src="Share.svg" alt=""/>
                    <p>235 M</p>
                </div>     
            </div>
            
        </div>      
    )
}