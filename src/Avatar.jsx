export default function Avatar(props){
    return(
        <>
        <div className="tweet-editor">
            <img class="avatar" src="Profile-Photo.png" alt=""/>
            <input class="tweet-editor-input" placeholder="what's happening ?"/>
            <div class="tweet-editor-actions">
                <img src="Media.svg" alt="button menu"/>
                <img src="Gif.svg" alt="button menu"/>
                <img src="Poll.svg" alt="button menu"/>
                <img src="Emoji.svg" alt="button menu"/>
                <img src="Schedule.svg" alt="button menu"/>
                { props.children}
            </div>
         </div>   
        </>
    )
}