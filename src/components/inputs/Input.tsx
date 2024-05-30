import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label?: string;
  type?: string;
  required?: boolean;
}

export const Input: FC<Props> = ({
  value,
  setValue,
  type,
  label,
  required,
}) => {
  return (
    <div className="input">
      <label>
        <p>{label}</p>
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
        />
      </label>
    </div>
  );
};
