import React from "react";

interface InputTextProps {
  name: string;
  required?: boolean;
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({
  name,
  placeholder,
  required = false,
}) => {
  return (
    <input
      type="text"
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
      placeholder={placeholder}
      required={required}
    />
  );
};

export default InputText;
