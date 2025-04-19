import { TableRecord } from "./TableRecord";

type LapTableProps = {
  laps: number[];
};

export const LapTable = ({ laps }: LapTableProps) => {
  return (
    <ul className="px-0 flex-1 overflow-auto">
      {laps.map((lap, index) => (
        <TableRecord
          key={index}
          time={{
            minutes: Math.floor(lap / 6000),
            seconds: Math.floor((lap % 6000) / 100),
            milliseconds: lap % 100,
          }}
          lap={index}
        />
      ))}
    </ul>
  );
};
