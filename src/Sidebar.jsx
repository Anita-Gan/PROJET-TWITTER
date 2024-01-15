import Button from "./Button";

export default function Nav(props) {
    return (
        <div className="Navbar">

            <ul>
                <li><a href="#">Home</a></li>
                <img src="" alt="" />
                <li><a href="#">Explore</a></li>
                <img src="" alt="" />
                <li><a href="#">Notification</a></li>
                <img src="" alt="" />
                <li><a href="#">Messages</a></li>
                <img src="" alt="" />
                <li><a href="#">Boomarks</a></li>
                <img src="" alt="" />
                <li><a href="#">List</a></li>
                <img src="" alt="" />
                <li><a href="#">Profil</a></li>
                <img src="" alt="" />
                <li><a href="#">More</a></li>
                <div className="btn_navbar">
                    <li>
                        <Button />
                    </li>
                </div>
                <div>
                <img class="avatar" src="Profile-Photo.png" alt="" />
                <input class="tweet-editor-input" placeholder="what's happening ?" />
                </div>
                
                {props.chidren}
            </ul>

        </div>
    )
}