import { useEffect, useState } from "react";


export const StopWatch = () => {

    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        let intervalID;

        if (isRunning) {
            intervalID = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 1000);

        } else {
            clearInterval(intervalID);
        }

        return () => {
            clearInterval(intervalID);
        };
    }, [isRunning]);

    const startStop = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    }

    const reset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }


    return (
        <div>
            <h1>Stopwatch</h1>
            <div>Time: {formatTime(elapsedTime)}</div>
            <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}