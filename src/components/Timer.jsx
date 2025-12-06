import { useState, useEffect } from 'react';

function Timer() {
    const [second, setSecond] = useState(0);
    const [running, setRunning] = useState(false);

    const handleStart = () => {
        setRunning(() => true);

    }
    const handlePause = () => {
        setRunning(() => false);
    }
    const handleReset = () => {
        setRunning(() => false);
        setSecond(() => 0);

    }
    useEffect(() => {
        let intervalId;
        if (running) {
            intervalId = setInterval(() => {
                setSecond((prevSecond) => prevSecond + 1);
            }, 1000);
        }


        return () => {
            clearInterval(intervalId);
        };
    }, [running]);

    return (<div className="bg-white m-64 p-2 shadow-lg rounded-xl">
        <p><strong>Seconds Elasped: </strong>{second}</p>
        <div className="buttons space-x-1 text-center">
            <button onClick={handleStart}>Start </button>
            <button onClick={handlePause}>Pause </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>);

}

export default Timer;