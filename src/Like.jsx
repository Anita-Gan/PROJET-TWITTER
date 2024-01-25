import React, { useState } from 'react';
import iconButon from './images/Button.svg'
import iconButon2 from './images/Button2.svg'
import iconButon1 from './images/heart-like.svg'
import iconButon0 from  './images/Button0.svg'
import iconButon3 from './images/Button3.svg'

export default function Like() {
    const [count, setCount] = useState(0);
    const [like, setLIke] = useState(false);
    const handleClick = () =>{
        setCount(count + (like ? -1 : 1));
        console.log(count);
        setLIke(!like)
    }
    
    return (
       
        <div className="tweet-action">
            <div>
                <img src={iconButon} alt=""  />
                <span>54M</span>
            </div>
            <div>
                <img src={iconButon3} alt=""  />
                <span>11M</span>
            </div>
            <div>
               {like && <img  onClick = {handleClick} src= {iconButon1} alt=''/>}
               {!like && <img  onClick= {handleClick} src={iconButon0} alt=""  />} 
               

                <span>{count}M</span>
            </div>
            <div>
                <img src={iconButon2} alt=""  />
                <span>67M</span>
            </div>

        </div>

    );
}
