import { useState } from 'react'
import styles from './BetGenerator.module.css'
import NumHolder from './NumHolder/NumHolder'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function generateBet(num){
    let myArr = []
    var temp
    for(let i = 0; i < num; i++){
        do{
            temp = getRandomIntInclusive(1,60)
        }while(!(myArr.indexOf(temp) === -1))
        myArr.push(temp)
    }
    return myArr
}

export default function BetGenerator(){
    
    const [numBet, setNumBet] = useState(1)
    const [content, setContent] = useState([])

    return(
        <>
            <h1>Mega-Sena Bet-Generator</h1>
            <ul className={styles.list}>
                {content}
            </ul>
            <div className={styles.betControls}>
                <input 
                    type='number' 
                    className={styles.input}
                    min={1} 
                    max={12} 
                    value={numBet} 
                    onChange={ (e) => setNumBet(e.target.value)}
                />
                <button onClick={() => {
                    let myList = generateBet(numBet)
                    console.log(myList)
                    let finalList = []
                    setContent()
                    myList.map((el, index) =>{
                        finalList.push(<NumHolder key={index}>{el}</NumHolder>)
                    })
                    setContent(finalList)
                }}>
                        Generate Bet
                </button>
            </div>
        </>
    ) 
}