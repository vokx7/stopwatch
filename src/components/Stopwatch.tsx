import { useEffect, useState } from "react";
import { Button } from "./Button";
import { TotalTime } from "./TotalTime";
import { LapTable } from "./LapTable";
import { Container } from "./Container";

export const Stopwatch = () => {
  const [start, setStart] = useState(false);
  const [counter, setCounter] = useState(0);

  const [laps, setLaps] = useState<number[]>([]);

  const toggleStopwatch = () => {
    setStart((prevStart) => !prevStart);
  };

  useEffect(() => {
    if (!start) return;
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  const handleLap = () => {
    const currentTime = counter;
    const summedLapTimes = laps.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    const lapTime = currentTime - summedLapTimes;
    setLaps((prevLap) => [...prevLap, lapTime]);
  };

  const clearStopwatch = () => {
    setCounter(0);
    setLaps([]);
  }

  return (
    <Container>
        <div className="flex-1 flex flex-col justify-end">
        <TotalTime
        time={{
          minutes: Math.floor(counter / 6000),
          seconds: Math.floor((counter % 6000) / 100),
          milliseconds: counter % 100,
        }}
      />
      <div className="flex flex-row justify-between py-4">
        <Button
          onClick={start ? handleLap : clearStopwatch}
          title={start || counter === 0 ? "Lap" : "Clear"}
          disabled={counter === 0}
        />
        <Button
          onClick={toggleStopwatch}
          title={start ? "Stop" : "Start"}
          color={start ? "text-red-500" : "text-green-500"}
       
        />
      </div>
        </div>
     
      <LapTable laps={laps} />
    </Container>
  );
};
