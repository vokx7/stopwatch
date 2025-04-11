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
    const {minutes, seconds, milliseconds} = time
    return <div className="flex flex-row justify-between">
        <p>Lap {lap}</p>
        <LapTime time={{
            minutes: minutes,
            seconds: seconds,
            milliseconds: milliseconds
        }}/>
    </div>
}