import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputPasswordProps {
  name: string;
  required?: boolean;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  name,
  required = false,
}) => {
  const [seePassword, changeSeePassword] = useState(false);
  const toggleSeePassword = () => {
    changeSeePassword((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5">
      <input
        type={seePassword ? "text" : "password"}
        name={name}
        className="text-gray-900 text-sm w-full outline-none bg-transparent"
        placeholder="password"
        required={required}
      />
      <span className="text-gray-600" onClick={toggleSeePassword}>
        {seePassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default InputPassword;
