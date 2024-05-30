// import  { useState } from "react";
// import Select, {SingleValue} from "react-select";

// const dropdownOption=[
//     {value:'vacation',label:'Vacation'},
//     {value:'personalLeave',label:'Personal Leave'},
//     {value:'sickDays',label:'Sick Days'},
//     {value:'workingRemotely',label:'Working remotely'},
//     {value:'slava',label:'Slava'},
//   ]

//   interface OptionType {
//     value: string;
//     label: string;
//   }

// export function OptionMenu() {
//   const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(null);

//   // const handleChange = (newValue: SingleValue<OptionType>) => {
//     // setSelectedOption(newValue);
//     console.log(selectedOption);
  
//   return (
//     <div>
//       <Select
//         defaultValue={selectedOption}
//         onChange={handleChange}
//         options={dropdownOption}
//       />
//     </div>
//   );
// }
