
import { useState } from "react";
import AnimalShow from "./Animal"

function App() {
    const animalsList = ['bird', 'cat', 'cow', 'dog', 'gator', 'heart', 'horse'];
    // const animalsSrc = animalsList.map((name, idx)=>{
    //     return "./images/"+name+".svg"

    // });
    console.log(animalsList);

    const [animals, setAnimals] = useState([]);

    function getRandomAnimal(){
        return animalsList[Math.floor(Math.random()*animalsList.length)];;
    }

    function handleClick(){
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimal = animals.map((srcPath, idx)=>{
        return <AnimalShow anmPath={srcPath} index={idx} />
    });

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimal}</div>
        </div>
    );
}

export default App;