import { FC } from 'react'
import { FieldNumber } from '../FirstRow/FieldNumber'

interface Props {
    date: Date;
  }
export const ThirdRow : FC<Props> = ({ date }) => {
    const daysInMont = daysInMonth(date.getMonth() + 1, date.getFullYear());
  return (
    <div className=" red stickyRow backgroundColor">
        <div className="firstRow border width10  stickyCol">Employee Name</div>
        <div className="width80 red ">
          {Array.from({ length: daysInMont }, (_, index) => (
            <FieldNumber day={index + 1} count={daysInMont} key={index}/>
          ))}
        </div>
        <div className="firstRow border3 width10 ">Absences</div>
      </div>
  )
}
function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }
  
