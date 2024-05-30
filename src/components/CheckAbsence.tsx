const checkAbsence = (
  dropdownOption: string,
  fromDate: string,
  toDate?: string
) => {
  // const hasOneDate = ["personalLeave", "slava"];
  const hasTwoDates = ["vacation", "sickDays", "workingRemotely"];
  console.log(fromDate);
  console.log(toDate);
  const date1 = new Date(fromDate);
  if (hasTwoDates.includes(dropdownOption) && toDate) {
    const date2 = new Date(toDate);
    if (date1 > date2) {
      alert("Datum povratka ne sme biti pre datuma odlaska!");
      return;
    }
//Proveri da li ne moze da uzme odmor
//Ako je vec imao 2 dana remote ovog meseca vrati false
    if (dropdownOption === "vacation") {
      if (fromDate || toDate) //obrisi
        console.log("vacationNazad");
      return false;
    }
    if (dropdownOption === "sickDays") {
      console.log("sickNazad");
      return false;
    }
    if (dropdownOption === "workingRemotely") {
      console.log("remoteNazad");
      return false;
    }
  }
  return true;
};
export default checkAbsence;
