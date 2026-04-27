import { Link } from 'react-router-dom';

export default function Textinput({
    type,
    name,
    label,
    placeholder,
    minLength,
    value,
    onChange,
    error,
    required = false,
    disabled = false
}) {

    return(
        <>
            <input 
            type={type} 
            name={name} 
            label={label} 
            placeholder={placeholder} 
            minLength={minLength}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled} 
            ></input>
        </>
    )
}