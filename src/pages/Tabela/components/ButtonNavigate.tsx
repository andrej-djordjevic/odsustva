import { FC } from "react";
import { unPaintField } from "../../HomePage/utils/PaintingFields";
interface OptionType {
  value: string;
  label: string;
}

interface FormState {
  fromDate: string;
  toDate: string;
  dropdownOption: OptionType | null;
}
interface Props {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  direction: string;
  formState: FormState;
}

export const ButtonNavigate: FC<Props> = ({
  date,
  setDate,
  direction,
  formState,
}) => {
  const buttonText = direction === "before" ? "<-" : "->";
  function handleDateChange() {
    const newDate = new Date(date);
    if (direction == "before") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else if (direction == "after") {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    // Set the date to one month before
    setDate(newDate);
    console.log(newDate);
    const odDatum2 = Number(formState.fromDate.slice(-2));
    const doDatum2 = Number(formState.toDate.slice(-2));
    unPaintField(odDatum2);
    unPaintField(doDatum2);
    if (formState.fromDate) setDate(new Date(formState.fromDate));
    else if (formState.toDate) setDate(new Date(formState.toDate));
    for (let i = odDatum2; i < doDatum2; i++) {
      unPaintField(i);
    }
  }
  return (
    <button className="buttonNavigate" onClick={handleDateChange}>
      {buttonText}
    </button>
  );
};
