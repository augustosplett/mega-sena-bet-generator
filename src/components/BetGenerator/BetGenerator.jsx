import { useState } from 'react'
import styles from './BetGenerator.module.css'
import NumHolder from './NumHolder/NumHolder'

export default function BetGenerator(){
    const [numBet, setNumBet] = useState(1)
    
    function generteRandonArray(){
        Math.random()
    }
    function generateBet(){

    }

    return(
        <>
            <h1>Mega-Sena Bet-Generator</h1>
            <ul className={styles.list}>
                <NumHolder>01</NumHolder>
                <NumHolder>06</NumHolder>
                <NumHolder>60</NumHolder>
                <NumHolder></NumHolder>
                <NumHolder></NumHolder>
                <NumHolder></NumHolder>
                <NumHolder></NumHolder>
                <NumHolder></NumHolder>
                <NumHolder></NumHolder>
            </ul>
            <input 
                type='number' 
                min={1} 
                max={12} 
                value={numBet} 
                onChange={ (e) => setNumBet(e.target.value)}
            />
            <button onClick={generateBet()}>Generate Bet</button>
        </>
    ) 
}