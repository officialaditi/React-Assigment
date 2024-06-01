import React from "react";

const Card1 = ({ img, content }: any) => {
  return (
    <div className="py-4 md:px-9 text-white flex flex-col items-center text-center gap-3">
      <img src={`${img}`} className="size-20" />
      <p>{content}</p>
    </div>
  );
};

export default Card1;
