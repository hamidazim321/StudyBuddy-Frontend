import React from "react";

interface InputEmailProps {
  name: string;
  required?: boolean;
}

const InputEmail: React.FC<InputEmailProps> = ({ name, required = false }) => {
  return (
    <input
      type="email"
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
      placeholder="email"
      required={required}
    />
  );
};

export default InputEmail;
