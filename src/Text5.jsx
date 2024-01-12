export default function Text5(props) {
    return (

        <div className="tweets">
        
        <img src="image 1(1).png" alt="image CNN"></img>
        <h3 className="text">NewsAppd@</h3>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Explicabo ipsa fugit quod culpa modi placeat labore rerum <br />autem amet, quas vero delectus est nam officia quia tempora ab ratione! Consequatur? {props.name} </p>
        <img class="tweet-image" src="pht peinture.jpg" alt="" />
        <div class="tweet-action">
                <img src="Buton.svg" alt=""/>
                <img src="Retweet.svg" alt=""/>
                <img src="Buton1.svg" alt=""/>
                <img src="Share.svg" alt=""/>
                
         </div>  
    </div> 



    )
}