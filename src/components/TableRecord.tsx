import { LapTime } from "./LapTime"

type TableRecordProps = {
    time: {
        minutes: number,
        seconds: number,
        milliseconds: number,
    }
    lap: number,
}

export const TableRecord = ({time, lap}:TableRecordProps) => {
    return <div className="flex flex-row justify-between not-prose py-1">
        <p>Lap {lap}</p>
        <LapTime time={time}/>
    </div>
}