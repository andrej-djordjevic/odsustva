import { FC } from "react";

interface Props {
  day: number;
  count: number;

}

export const FieldNumber: FC<Props> = ({ day,count }) => {
  return (
    <>
      <div className="firstRow border" style={{width:`${100/count}%`}}>{day}</div>
    </>
  );
};
