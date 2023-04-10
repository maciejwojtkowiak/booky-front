interface FormInputProps {
    placeholder: string;
}

const FormInput = ({placeholder}: FormInputProps) => {
    return (<li><input placeholder={placeholder} /></li>)
}

export default FormInput;