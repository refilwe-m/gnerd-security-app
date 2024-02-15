import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({ placeholder, ...rest }) => {
  return (
    <input
      className="border rounded-lg py-2 px-3"
      placeholder={placeholder}
      {...rest}
    />
  );
};
