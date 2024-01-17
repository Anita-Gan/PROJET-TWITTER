import Button from "./Button";

export default function Nav(props) {
    return (
        <div className="Navbar">

            <ul>
                <div className="navbar_text">
                    <img src="TWT.svg" alt="" />
                </div>
                <div className="navbar_text">
                    <img src="Notifications.svg" alt="" />
                    <li><a href="#">Home</a></li>
                </div>
                <div className="navbar_text">
                    <img src="Explore.svg" alt="" />
                    <li><a href="#">Explore</a></li>
                </div>
                <div className="navbar_text">
                    <img src="Notifications.svg" alt="" />
                    <li><a href="#">Notification</a></li>
                </div>
                <div className="navbar_text">
                    <img src="Messages.svg" alt="" />
                    <li><a href="#">Messages</a></li>
                </div>
                <div className="navbar_text">
                    <img src="Bookmarks.svg" alt="" />
                    <li><a href="#">Boomarks</a></li>
                </div>
                <div className="navbar_text">
                    <img src="Lists.svg" alt="" />
                    <li><a href="#">List</a></li>
                </div>
                <div className="navbar_text">
                    <img src="Profile.svg" alt="" />
                    <li><a href="#">Profil</a></li>
                </div>
                <div className="navbar_text">
                    <img src="More.svg" alt="" />
                    <li><a href="#">More</a></li>
                </div>

                <div className="btn_navbar">
                    <li>
                        <Button />
                    </li>
                </div>
                <div className="navbar_avatar">
                    <img class="avatar" src="Profile-Photo.png" alt="" />
                    <input class="tweet-editor-input" placeholder="what's happening ?" />
                </div>

                {props.chidren}
            </ul>

        </div>
    )
}