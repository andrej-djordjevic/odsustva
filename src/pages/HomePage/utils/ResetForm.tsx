interface FormState {
  fromDate: string;
  toDate: string;
  dropdownOption: OptionType | null;
}
interface OptionType {
  value: string;
  label: string;
}
export const resetForm = (
  setFormState: React.Dispatch<React.SetStateAction<FormState>>
) => {
  setFormState({
    fromDate: "",
    toDate: "",
    dropdownOption: null,
  });
};
