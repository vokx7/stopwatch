import { TableRecord } from "./TableRecord"

export const LapTable = () => {
    return<ul>
        <TableRecord time={{
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        }} lap={0}/>
    </ul>
}