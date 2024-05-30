import { FC, useRef } from "react";

interface Props {
  count: number;
  row: number;
  col: string;
}

export const EmptyField: FC<Props> = ({ count, row, col }) => {
  const divRef = useRef<HTMLDivElement>(null); // Specify the type of divRef

  const handleClick = () => {
    if (divRef.current) {
      // Add a null check
      divRef.current.style.backgroundColor = "gray";
    }
  };

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      className={`firstRow border middlePart x${row} y${col}`}
      style={{
        width: `${100 / count}%`,
        backgroundColor: "var(--tableBackground)",
      }}
      // onClick={handleEmptyClick}
    />
  );
};
