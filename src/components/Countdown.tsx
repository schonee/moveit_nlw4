import { useState, useEffect, useContext } from 'react';
import {CountdownContext} from '../contexts/CountdownContext';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){


    const{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
        setTime
    } = useContext(CountdownContext);

    const [minuteLeft, minutetRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    const [timer, setTimer] = useState('')

 
    function handleTimerChange(e: React.FormEvent<HTMLInputElement>) {

        e.preventDefault()

        setTimer(e.currentTarget.value);
    }

    function storeTime(){
        
        setTime(timer);
    
    }

    return(
        
    <div> 
        <div className={styles.countdownContainer}>

            
            <div>
                <span>{minuteLeft}</span>
                <span>{minutetRight}</span>

            </div>

            <span>:</span>


            <div>
                <span>{secondLeft}</span>
                <span>{secondsRight}</span>

            </div>
            
          
        </div>  

            <input className={styles.inputTimer}
                type="text" 
                value={timer}
                placeholder="Tempo de pausa"
                onChange={event => handleTimerChange(event)} 
            />
        
            <button className={styles.buttonTimer} onClick={storeTime}>
                ok
            </button>
      
        { hasFinished ? (

            <button 
            disabled
            type="button" 
            className={styles.countdownButton}
            onClick={resetCountdown}>

                Ciclo encerrado

            </button>

        ):( 
            <>

            {isActive ? ( 

                <button 
                type="button" 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}>
    
                    Abandonar ciclo
            
                </button>
    
                ):(
    
                <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}>
    
                   Iniciar um ciclo
            
                </button>
                 ) }
        </>
        ) }

        </div>
    );
}

