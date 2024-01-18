export default function Trends() {
    return (
        <div className="Trends">
            <div className="nav">
                <img src="Vector.svg" alt="" />
                <input className="nav_search" type="search"
                    id="maRecherche"
                    name="q"
                    placeholder="search Twitter"
                    size="40" />

            </div>

            <ul>
                <div className="Trends_1">
                    <div className="trend_1">
                        <p>Trends for you</p>
                        <div>
                            <img src="Settings.svg" alt=""/>
                        </div>
                    </div>

                    <div>
                        <div className="trend_text">
                            <span className="trend_2">Trending in Turkey</span>
                            <div>
                                <img src="More-2.svg" alt="" />
                            </div>
                        </div>
                        <span>#QUID</span>
                        <p className="trend_2">2,066 Tweets</p>
                        <div className="trend_text">
                            <span className="trend_2">Trending in Turkey</span>
                            <div>
                                <img src="More-2.svg" alt="" />
                            </div>
                        </div>
                        <span>#QUID</span>
                        <p className="trend_2">2,066 Tweets</p>
                        <div className="trend_text">
                            <span className="trend_2">Trending in Turkey</span>
                            <div>
                                <img src="More-2.svg" alt="" />
                            </div>
                        </div>
                        <span>#QUID</span>
                        <p className="trend_2">2,066 Tweets</p>
                        <div className="trend_text">
                            <span className="trend_2">Trending in Turkey</span>
                            <div>
                                <img src="More-2.svg" alt="" />
                            </div>
                        </div>
                        <span>#QUID</span>
                        <p className="trend_2">2,066 Tweets</p>
                    </div>

                    <div>
                        <a href="#">Show more</a>
                    </div>
                </div>

            </ul>
            <div className="trend_3">
                <span>Who to follow</span>

                
                {/* <span>The New York Times</span>
                <img src="vector2.svg" alt="" />
                <p>@nytimes</p> */}
                <div className="TT">
                <img src="image 1(1).png" alt="" />
                 <span>The New York Times</span> 
                
                    <button className="btn_trend">Follow</button>
                </div>

                
                {/* <span>CNN</span>
                <img src="vector2.svg" alt="" />
                <p>@cnn</p> */}
                <div className="TT">
                <img src="image 1.png" alt="" />
                <span>Hello world@</span>
                    <button className="btn_trend">Follow</button>
                </div>


                <div className="TT">
                    <img src="image 1(2).png" alt="" />
                    <span>Twitter</span>
                    <button className="btn_trend">Follow</button>
                </div>
                <span className="showmore"> Show more</span>
            </div>





        </div >
    )
}