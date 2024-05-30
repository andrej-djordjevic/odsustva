import { FC } from "react";

interface Props {
  day: number;
  month: number;
  year: number;
  count: number;
}

export const FieldDayOfWeek: FC<Props> = ({ day, month, year,count }) => {
  const date1 = new Date(year, month, day);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <>
      <div className="firstRow border "style={{width:`${100/count}%`}} >
        {daysOfWeek[date1.getDay()].substring(0, 3)}
      </div>
      {/* <div className="firstRow">{day}</div> */}
    </>
  );
};
