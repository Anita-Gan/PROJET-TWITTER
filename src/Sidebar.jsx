import { Link } from "react-router-dom";
import Button from "./Button";

export default function Nav(props) {
    return (
        <div className="Navbar">

            <ul>
                <Link to="" className="navbar_text">
                    <img src="TWT.svg" alt="" />
                </Link>
                <Link  to="" className="navbar_text">
                    <img src="Notifications.svg" alt="" />
                    <li>Home</li>
                </Link>
                <Link className="navbar_text">
                    <img src="Explore.svg" alt="" />
                    <li>Explore</li>
                </Link>
                <Link className="navbar_text">
                    <img src="Notifications.svg" alt="" />
                    <li>Notification</li>
                </Link>
                <Link className="navbar_text">
                    <img src="Messages.svg" alt="" />
                    <li>Messages</li>
                </Link>
                <Link className="navbar_text">
                    <img src="Bookmarks.svg" alt="" />
                    <li>Boomarks</li>
                </Link>
                <Link className="navbar_text">
                    <img src="Lists.svg" alt="" />
                    <li>List</li>
                </Link>
                <Link  to="profil" className="navbar_text">
                    <img src="Profile.svg" alt="" />
                    <li>Profil</li>
                </Link>
                <Link className="navbar_text">
                    <img src="More.svg" alt="" />
                    <li>More</li>
                </Link>

                <Link className="btn_navbar">
                    <li>
                        <Button />
                    </li>
                </Link>
                <div className="navbar_avatar">
                    <img className="avatar" src="Profile-Photo.png" alt="" />
                    <input className="tweet-editor-input" placeholder="what's happening ?" />
                </div>

                {props.chidren}
            </ul>

        </div>
    )
}