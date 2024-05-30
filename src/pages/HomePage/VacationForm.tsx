import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChooseDate from "../../components/ChooseDate";
import checkAbsence from "../../components/CheckAbsence";
import Select, { SingleValue } from "react-select";
import MustLogin from "../Login/MustLogin";
import { paintField, unPaintField } from "./utils/PaintingFields";
import { resetForm } from "./utils/ResetForm";

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
  formState: FormState;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
}

const VacationForm: FC<Props> = ({
  // date,
  setDate,
  formState,
  setFormState,
}) => {
  const singleDate = ["personalLeave", "slava"];
  const doubleDate = ["vacation", "sickDays", "workingRemotely"];
  const handleChangee = (newValue: SingleValue<OptionType>) => {
    setSelectedOption(newValue);
    if (newValue && singleDate.includes(newValue.value)) {
      setFormState((prevState) => ({
        ...prevState,
        toDate:"",
        dropdownOption: newValue,
      }));
    }
    setFormState((prevState) => ({
      ...prevState,
      dropdownOption: newValue,
    }));
  };
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<OptionType>>(null);
  const dropdownOption = [
    { value: "vacation", label: "Vacation" },
    { value: "personalLeave", label: "Personal Leave" },
    { value: "sickDays", label: "Sick Days" },
    { value: "workingRemotely", label: "Working remotely" },
    { value: "slava", label: "Slava" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(formState.fromDate);
    const date1 = new Date(formState.fromDate);
    // if (doubleDate.includes(formState.dropdownOption?.value) && toDate) {
    const date2 = new Date(formState.toDate);
    if (date1 > date2) {
      alert("Datum povratka ne sme biti pre datuma odlaska!");
      //POSTAVLJA OBA DATUMA NA DATUM ODLASKA
      setFormState({
        fromDate:
          date1.getFullYear() +
          "-" +
          (Number(date1.getMonth()) + 1 < 10
            ? "0" + (Number(date1.getMonth()) + 1)
            : Number(date1.getMonth()) + 1) +
          "-" +
          date1.getDate(),
        toDate:
          date1.getFullYear() +
          "-" +
          (Number(date1.getMonth()) + 1 < 10
            ? "0" + (Number(date1.getMonth()) + 1)
            : Number(date1.getMonth()) + 1) +
          "-" +
          date1.getDate(),
        dropdownOption: null,
      });
      return;
    }
    // console.log( document.querySelectorAll('.x1'))
    const odDatum = Number(formState.fromDate.slice(-2));
    if (!formState.dropdownOption) {
      return;
    }
    paintField(odDatum, formState.dropdownOption.value);
    const doDatum = Number(formState.toDate.slice(-2)) - 1;
    paintField(doDatum, formState.dropdownOption.value);
    if (odDatum)
      for (let i = odDatum; i < doDatum; i++) {
        paintField(i, formState.dropdownOption.value);
      }
  }, [formState, setFormState]); //Trazio da se doda setFormState
  if (!sessionStorage.getItem("UserName")) {
    return <MustLogin />;
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const odDatum2 = Number(formState.fromDate.slice(-2));
    const doDatum2 = Number(formState.toDate.slice(-2)) - 1;
    unPaintField(odDatum2);
    unPaintField(doDatum2);
    if (formState.fromDate) setDate(new Date(formState.fromDate));
    else if (formState.toDate) setDate(new Date(formState.toDate));
    for (let i = odDatum2; i < doDatum2; i++) {
      unPaintField(i);
    }

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formState.dropdownOption == null) {
      alert("Morate izabrati razlog odsustva!");
      return false;
    }

    if (
      formState.dropdownOption?.value &&
      doubleDate.includes(formState.dropdownOption?.value)
    ) {
      if (!formState.fromDate || !formState.toDate) {
        alert("Morate uneti oba datuma!");
        return false;
      }
    } else if (
      formState.dropdownOption?.value &&
      singleDate.includes(formState.dropdownOption?.value)
    ) {
      if (!formState.fromDate) {
        alert("Morate izabrati datum odsustva!");
        return;
      }
    }

    if (
      !checkAbsence(
        formState.dropdownOption.value,
        formState.fromDate,
        formState.toDate
      )
    ) {
      return;
    }

    console.log("Submitting form:", formState);
    resetForm(setFormState);
  };

  function handleShowCalendar() {
    navigate("/table");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="backgroundCenter">
      <form onSubmit={handleSubmit} className="login-form form">
        <label>
          <b>Dobrodosli {sessionStorage.getItem("UserName")}</b>
        </label>
        <label>
          Izaberite razlog odsustva:
          <div>
            <Select
              defaultValue={selectedOption}
              onChange={handleChangee}
              options={dropdownOption}
            />
          </div>
        </label>

        {selectedOption && (
          <ChooseDate
            setDate={setDate}
            selectedOption={selectedOption}
            fromDate={formState.fromDate}
            toDate={formState.toDate}
            onFromDateChange={(e) => handleChange(e)}
            onToDateChange={(e) => handleChange(e)}
          />
        )}

        <center>
          <button type="submit" className="button1">
            Submit
          </button>
        </center>
        <center>
          <button
            type="button"
            className="showCalendar button1"
            onClick={handleShowCalendar}
          >
            Show calendar
          </button>
        </center>
      </form>
    </div>
  );
};

export default VacationForm;
