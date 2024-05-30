import { FC, useEffect, useState } from "react";

interface Props {
  date: Date;
}

export const SumField: FC<Props> = ({ date }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const elements = document.querySelectorAll(
        ".y5"
      ) as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        const backgroundColor = getComputedStyle(element).backgroundColor;
        console.log(`Element background color: ${backgroundColor}`);
      });

      const yellowBackground = Array.from(elements).filter(
        (element) =>
          getComputedStyle(element).backgroundColor !== "rgb(208, 228, 255)"
      );

      setCount(yellowBackground.length);
      console.log("Filtered elements:", yellowBackground);
    }, 5);//Moze da ne radi
  }, [date]);

  return <p className="border width10 firstRow">{count}</p>;
};
