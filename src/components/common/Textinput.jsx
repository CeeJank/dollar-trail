import { Link } from 'react-router-dom';

export default function Textinput({
    type,
    name,
    label,
    placeholder,
    value,
    onChange,
    error,
    required = false,
    disabled = false
}) {

    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
            type={type} 
            name={name} 
            className={`input-base ${error ? 'input-error' : ''}`}
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled} 
            ></input>
            <span className="error-text">{error}</span>
        </div>
    )
}