import { FC } from 'react'
import { SumField } from '../SumField';

interface Props {
    date: Date;
  }

export const LastRow : FC <Props> = ({date}) => {
    function daysInMonth(month: number, year: number) {
        return new Date(year, month, 0).getDate();
      }
      const daysInMont= daysInMonth(date.getMonth() + 1, date.getFullYear());
  return (
    <div className="red">
        <p className="firstRow border margin0 width10 stickyCol">Total</p>
        <div className="width80 red">
         {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {Array.from({ length: daysInMont }, (_, index) => (
          <SumField date={date} key={index}/>
        ))}
        
      </div>
        <SumField date={date}/>
    </div>
  )
}
