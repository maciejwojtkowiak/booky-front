interface FormInputProps {
  placeholder: string;
}

const FormInput = ({ placeholder }: FormInputProps): JSX.Element => {
  return (
    <li>
      <input placeholder={placeholder} />
    </li>
  );
};

export default FormInput;
