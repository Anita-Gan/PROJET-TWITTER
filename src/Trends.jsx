export default function Trends() {
    return (
        <div className="Trends">
            <ul>
                <li>
                    <input type="search"
                        id="maRecherche"
                        name="q"
                        placeholder="search Twitter"
                        size="30" />
                </li>
                <li>
                    <div>
                        <h3>Trends for you</h3>
                        <img src="setting.svg" alt="" />
                    </div>
                </li>
                <li>
                    <h3>Trending in Turkey</h3>
                    <img src="" alt="" />
                    <h3>#QUID</h3>
                    <p>2,066 Tweets</p>
                    <p>Trending in Turkey</p>
                    <img src="" alt="" />
                    <h3>#QUID</h3>
                    <p>2,066 Tweets</p>
                    <p>Trending in Turkey</p>
                    <img src="" alt="" />
                    <h3>#QUID</h3>
                </li>
                <li>
                    <a href="#">Show more</a>
                </li>
            </ul>






        </div>
    )
}