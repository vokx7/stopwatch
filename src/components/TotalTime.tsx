type TotalTimeProps = {
    time: {
        minutes: number,
        seconds: number,
        milliseconds: number
    }
}
export const TotalTime = ({time}: TotalTimeProps) => {
    const {minutes, seconds, milliseconds} = time
    return <h1>{minutes < 10 ? "0" : null}{minutes} : {seconds < 10 ? "0" : null}{seconds} : {milliseconds < 10 ? "0" : null}{milliseconds}</h1>
}