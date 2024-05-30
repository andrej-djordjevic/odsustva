import { Dispatch, FC, SetStateAction, useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label?: string;
  type?: string;
  required?: boolean;
}

export const InputPassword: FC<Props> = ({
  value,
  setValue,
  label,
  required,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="input">
      <label >
        <label>{label}</label>
        <div className="input-container">
          <input
            type={visible ? "text" : "password"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required={required}
          ></input>
          <div onClick={() => setVisible(!visible)} className="icon-container" >
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
      </label>
    </div>
  );
};
