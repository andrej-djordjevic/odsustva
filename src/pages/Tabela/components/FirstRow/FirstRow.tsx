import { FC } from "react";
import { FieldDayOfWeek } from "./FieldDayOfWeek";

interface Props {
  date: Date;
}

export const FirstRow: FC<Props> = ({ date }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysInMont = daysInMonth(date.getMonth() + 1, date.getFullYear());
  return (
    <div className="">
      {/* Prvi Red */}
      <div className="red backgroundColor">
        <p className="firstRow  border width10 stickyCol">{months[date.getMonth()]}</p>
        <p className="firstRow  border width80 ">Dates of Absence</p>
        <p className="firstRow  border width10 ">{date.getFullYear()}</p>
      </div>
      {/*Drugi Red  */}
      <div className=" red backgroundColor">
        <div className="firstRow border width10 stickyCol">
          {date.getMonth() + 1 > 9
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)}
        </div>
        <div className="width80 red">
          {Array.from({ length: daysInMont }, (_, index) => (
            <FieldDayOfWeek
              key={index}
              day={index + 1}
              month={date.getMonth()}
              year={date.getFullYear()}
              count={daysInMont}
            />
          ))}
        </div>
        <div className="firstRow border2 width10">Total</div>
      </div>
      {/* Treci Red */}
      
    </div>
  );
};
function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}
