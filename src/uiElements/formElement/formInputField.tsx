import { Input, InputProps } from "../input";

interface FormInputProps extends InputProps {
    icon1: React.ReactElement;
    icon2?: React.ReactElement;
}
const FormInputField = ({ type, placeholder, icon1, name, icon2, onChange, className, ...rest }: FormInputProps) => {
    return (
        <div className="flex flex-row items-center gap-2 font-poppins bg-gray-200 h-[45px] border border-primary rounded">
            <label htmlFor={name}>{icon1}</label>
            <Input
               name={name}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
               className="bg-transparent"
               { ...rest }
            />
            { (icon2 && type === "password" ) && <span>{icon2}</span>}
        </div>
    )
}

export default FormInputField;