import { useEffect, useState } from "react"
import { Button } from "./Button"
import { TotalTime } from "./TotalTime"
import { LapTable } from "./LapTable";
import { Container } from "./Container";

export const Stopwatch = () => {
    const [start, setStart] = useState(false);
    const [counter, setCounter] = useState(0);

    const toggleStopwatch = () => {
        setStart(prevStart => !prevStart)
    }

    useEffect(() => {
        if(!start) return
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 10);
        return () => {
            clearInterval(interval);
        }
    }, [start]);
         


    return <Container>
        <TotalTime time={{
           minutes: Math.floor(counter / 6000),
           seconds: Math.floor((counter % 6000) / 100),
           milliseconds: counter % 100
        }}/>
        <div className="flex flex-row justify-between">
        <Button title={"Lap"} color={start ? "text-red-500" : "text-green-500"} backgroundColor={"bg-white"} onClick={toggleStopwatch}/>
        <Button title={start ? "Stop" : "Start"} color={start ? "text-red-500" : "text-green-500"} backgroundColor={"bg-white"} onClick={toggleStopwatch}/>
        </div>
        <LapTable/>
    </Container>
}