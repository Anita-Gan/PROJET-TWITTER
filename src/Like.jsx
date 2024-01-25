import React, { useState } from 'react';
import iconButon from './images/Button.svg'
import iconButon2 from './images/Button2.svg'
import iconButon1 from './images/heart-like.svg'
import iconButon3 from './images/Button3.svg'

export default function Like() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    return (
       
        <div className="tweet-action">
            <div>
                <img src={iconButon} alt="" onClick={increment} />
                <span>54M</span>
            </div>
            <div>
                <img src={iconButon3} alt="" onClick={increment} />
                <span>11M</span>
            </div>
            <div>
                <img src={iconButon1} alt="" onClick={increment} />
                <span>{count}M</span>
            </div>
            <div>
                <img src={iconButon2} alt="" onClick={increment} />
                <span>67M</span>
            </div>

        </div>

    );
}
