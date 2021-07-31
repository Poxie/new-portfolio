import { useEffect, useMemo, useState } from "react"
import './Input.css'

interface Props {
    placeholder?: string;
    onSubmit?: (value: string) => void;
    onChange?: (value: string) => void;
    disabled?: boolean;
    defaultValue?: string;
    replaceString?: [string, string];
    noCaps?: boolean;
}

export const Input: React.FC<Props> = ({ placeholder, onSubmit, onChange, disabled, defaultValue, replaceString, noCaps }) => {
    const [value, setValue] = useState(defaultValue || '');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!value) return;
        if(onSubmit) onSubmit(value);
        setValue('');
    };

    const handleChange = useMemo(() => (value: string) => {
        let tempValue = value;
        if(replaceString) tempValue = tempValue.replaceAll(replaceString[0], replaceString[1]);
        if(noCaps) tempValue = tempValue.toLowerCase();
        if(onChange) onChange(tempValue);
        setValue(tempValue);
    }, []);

    return(
        <form className="input" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={(e) => handleChange(e.target.value)}
            />
        </form>
    )
}