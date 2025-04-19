type LapTimeProps = {
    time: {
        minutes: number,
        seconds: number,
        milliseconds: number
    }
}
export const LapTime = ({time}: LapTimeProps) => {
    const {minutes, seconds, milliseconds} = time
    return <p>{minutes < 10 ? "0" : null}{minutes} : {seconds < 10 ? "0" : null}{seconds} : {milliseconds < 10 ? "0" : null}{milliseconds}</p>
}