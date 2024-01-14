import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import heart from './images/heart.svg';
import horse from './images/horse.svg';
import { useState } from 'react';

const svgMap = {
    bird, cat, cow, dog, gator, heart, horse
}

function AnimalsShow({anmPath, index}){
    const [click, setClick] = useState(0);
    const handleClick = () => {
        setClick(click+1)

    };

    return (
        <div onClick={handleClick}>
            <img src={svgMap[anmPath]} alt="Dynamic Local" />
        </div>
    );
}

export default AnimalsShow;