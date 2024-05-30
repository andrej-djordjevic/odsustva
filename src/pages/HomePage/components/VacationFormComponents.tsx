import { FC } from "react";

interface Props {
  value: string|null;
  text: string;
}

export const OptionItem: FC<Props> = ({ value, text }) => {
  return <option value={(value?value:"")}>{text}</option>;
};
