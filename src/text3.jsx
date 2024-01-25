import Like from "./Like"

export default function Text3(props) {
    return (

        <div className="tweets">
            <img src="image 1(2).png " alt="" />
            <div>
                <h3 className="text">Twitter</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Ex libero rerum placeat, vero omnis fugiat sit eos natus tenetur aspernatur architecto aperiam dicta incidunt nam delectus adipisci repellendus facilis ducimus!</p>
                <Like />
                
            </div>
           
        </div>
    )
}