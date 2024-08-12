import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"
const formatTime = (timeInSeconds:number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

//  {   const hours = String(Math.floor(timeInSeconds / 60*60));
//     const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
//     const seconds = String(timeInSeconds % 60);}

    const hoursInString = hours.toString().padStart(2, "0");
    const minutesInString = minutes.toString().padStart(2, "0");
    const secondsInString = seconds.toString().padStart(2, "0");

    //return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}:`
    return `${hoursInString}:${minutesInString}:${secondsInString}`;
}

const StopWatch = () => {

    const [time, setTime]=useState<number>(0);
    const [isRunning, setisRunning]=useState<boolean>(false);
    
    const resetHandler = () => {
        setTime(0);
        setisRunning(false);
    }

useEffect(() => {
    let intervalID : number;
    if(isRunning)
    intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
    }, 1000);

    return () => {
        clearInterval(intervalID);
    }
},[isRunning]);

  return (
    <div className="adminContainer">
    <AdminSidebar/>
    <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
            <div className="stopwatch">
                <h2>{formatTime(time)}</h2>
                <button onClick={() => setisRunning((prev) => !prev)}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </section>
        </main>
    </div>
  )
}

export default StopWatch
