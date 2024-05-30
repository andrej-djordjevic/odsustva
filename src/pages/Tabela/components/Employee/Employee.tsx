/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from 'react'

import { FC } from "react";
import { EmptyField } from "./EmptyField";
import { SumField } from "../SumField";




interface Props {
  ime: string;
  prezime: string;
  date: Date;
}

export const Employee: FC<Props> = ({ date}) => {
  const daysInMont = daysInMonth(date.getMonth() + 1, date.getFullYear());
  let id=1;
  const zaposleni: any[] = [
    { firstName: "Andrej1", lastName: "Djordjevic1" ,id:id++},
    { firstName: "Andrej2", lastName: "Djordjevic2" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
    { firstName: "Andrej3", lastName: "Djordjevic3" ,id:id++},
  ];
  return zaposleni.map((zaposlen) => (
    <div className="red">
      {/* Unosenje imena zaposlenog */}
      <p className="firstRow border margin0 width10 stickyCol ">
        {zaposlen.firstName} {zaposlen.lastName}
      </p>

      {/* Polja za unosenje odsustva */}
      <div className="width80 red">
        {Array.from({ length: daysInMont }, (_, index) => (
          <EmptyField count={daysInMont} key={index+zaposlen.id} row={index+1} col={`${zaposlen.id}`}/>
        ))}
      </div>
      <SumField date={date}/>
    </div>
  ));
};

function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}
