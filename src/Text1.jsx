export default function Text1(props) {
    return (

        <div className="tweets">
            <h3 className="text">Hello World@</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Explicabo ipsa fugit quod culpa modi placeat labore rerum <br/>autem amet, quas vero delectus est nam officia quia tempora ab ratione! Consequatur? {props.name} </p>
        
        <div className="tweet-action">
                <img src="Buton.svg" alt=""/>
                <img src="Retweet.svg" alt=""/>
                <img src="Buton1.svg" alt=""/>
                <img src="Group.png" alt=""/>
        </div>
                
        </div>      
    )
}