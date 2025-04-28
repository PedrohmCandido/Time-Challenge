import { useState, useRef } from "react";
import ResultModal from './ResultModal'

export default function TimeChallenge({ title, timeTarget }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeReamining, setTimeRemaining] = useState(timeTarget * 1000);

  const timerIsActive = timeReamining > 0 && timeReamining < timeTarget * 1000;

  if(timeReamining <= 0){
    clearInterval(timer.current)
    dialog.current.open();
  }

  function handleReset(){
    setTimeRemaining(timeTarget * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(previousTimeRemaining => previousTimeRemaining - 10);
    }, 10);

  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
       <ResultModal ref={dialog} timeTarget={timeTarget} RemainingTime={timeReamining} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {timeTarget} second{timeTarget > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="">
          {timerIsActive ? "Timer is running!" : "Timer inactive!"}
        </p>
      </section>
    </>
  );
}
