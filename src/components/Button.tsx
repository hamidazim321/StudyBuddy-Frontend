import React from "react";

interface ButtonProps {
  title: string;
  color: string;
  type: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ title, color, type, onClick }) => {
  return (
    <button
      type={type}
      className={`${color} text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
