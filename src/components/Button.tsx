import React from "react";

interface ButtonProps {
  title: string;
  color: string;
  type: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ title, color, type }) => {
  return (
    <button
      type={type}
      className={`${color} text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full`}
    >
      {title}
    </button>
  );
};

export default Button;
