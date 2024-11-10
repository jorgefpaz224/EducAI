import React from 'react'

const InputGroup = ({ type, id, label, placeholder, value, onChange }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputGroup;