import { FC } from "react";
// import { Input } from "./inputs/Input";

interface ChooseDateProps {
  selectedOption?: OptionType;
  fromDate: string;
  toDate: string;
  onFromDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}
interface OptionType {
  value: string;
  label: string;
  
}

const ChooseDate: FC<ChooseDateProps> = ({
  selectedOption,
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) => {
  // console.log(selectedOption)
  return (
    <>
      {selectedOption?.value === "vacation" && (
        <>
        {/* <Input label="datum odlaska" type="date" setValue={onFromDateChange} value={fromDate} required={true}/> */}
          <label>Izaberite datum odlaska:
          <input
            type="date"
            name="fromDate"
            value={fromDate}
            onChange={onFromDateChange}
            /></label>
          <label>Datum dolaska:
          <input
            type="date"
            name="toDate"
            value={toDate}
            onChange={onToDateChange}
            /></label>
        </>
      )}
      {selectedOption?.value === "personalLeave" && (
        <>
          <label>Izaberite datum odsustva:
          <input
            type="date"
            name="fromDate"
            value={fromDate}
            onChange={onFromDateChange}
          /></label>
        </>
      )}
      {selectedOption?.value === "sickDays" && (
        <>
          <label>Izaberite datum odlaska:
          <input
            type="date"
            name="fromDate"
            value={fromDate}
            onChange={onFromDateChange}
          /></label>
          <label>Datum dolaska:
          <input
            type="date"
            name="toDate"
            value={toDate}
            onChange={onToDateChange}
          /></label>
        </>
      )}
      {selectedOption?.value === "workingRemotely" && (
        <>
          <label>Izaberite datum rada od kuce:
          <input
            type="date"
            name="fromDate"
            value={fromDate}
            onChange={onFromDateChange}
          /></label>
          <label>Datum dolaska:
          <input
            type="date"
            name="toDate"
            value={toDate}
            onChange={onToDateChange}
          /></label>
        </>
      )}
      {selectedOption?.value === "slava" && (
        <>
          <label>Izaberite datum odsustva:
          <input
            type="date"
            name="fromDate"
            value={fromDate}
            onChange={onFromDateChange}
          /></label>
        </>
      )}
    </>
  );
};

export default ChooseDate;
