import React from "react";

interface CardProps {
  topColor: string;
  bottomColor: string;
  headText: string;
  bottomText: string;
}

const BannerCard: React.FC<CardProps> = ({
  topColor,
  bottomColor,
  headText,
  bottomText,
}) => {
  return (
    <div className="flex flex-col items-center rounded-lg text-white shadow-2xl">
      <h1
        className={`${topColor} p-1 w-full rounded-t-lg text-lg shadow-inner`}
      >
        {headText}
      </h1>
      <p className={`${bottomColor} p-1 w-full rounded-b-lg text-md`}>
        {bottomText}
      </p>
    </div>
  );
};

export default BannerCard;
