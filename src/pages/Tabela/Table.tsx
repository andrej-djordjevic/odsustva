import { FC, useState } from "react";
import { Employee } from "./components/Employee/Employee";
import { FirstRow } from "./components/FirstRow/FirstRow";
import VacationForm from "../HomePage/VacationForm";
import { LastRow } from "./components/LastRow/LastRow";
import MustLogin from "../Login/MustLogin";
import { ThirdRow } from "./components/ThirdRow/ThirdRow";
import { ButtonNavigate } from "./components/ButtonNavigate";

interface FormState {
  fromDate: string;
  toDate: string;
  dropdownOption: OptionType | null;
}
interface OptionType {
  value: string;
  label: string;
}

const Table: FC = () => {
  const date0 = new Date();
  const [date, setDate] = useState(date0);
  const [formState, setFormState] = useState<FormState>({
    fromDate: "",
    toDate: "",
    dropdownOption: null,
  });
  if (!sessionStorage.getItem("UserName")) {
    return <MustLogin />;
  }
  return (
    <div>
      <div className="table border">
        {/* First 3 rows */}
        <div>
          <FirstRow date={date} />
        </div>
        <div className="stickyRow ">
          <ThirdRow date={date} />
        </div>
        {/* All other rows */}
        <div>
          <Employee date={date} ime={""} prezime={""} />
        </div>
        <div>
          <LastRow date={date} />
        </div>
      </div>
      <ButtonNavigate
        date={date}
        setDate={setDate}
        direction={"before"}
        formState={formState}
      />
      <ButtonNavigate
        date={date}
        setDate={setDate}
        direction={"after"}
        formState={formState}
      />
      <VacationForm
        date={date}
        setDate={setDate}
        formState={formState}
        setFormState={setFormState}
      />
    </div>
  );
};
export default Table;
