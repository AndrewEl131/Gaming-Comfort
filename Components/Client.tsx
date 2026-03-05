import React from "react";
import Image from "next/image";

type ClientProps = {
    img: string;
}

export default function Client({img}: ClientProps) {
  return (
    <div className="w-60 h-85 pt-5 flex flex-col gap-15 rounded-md bg-[#b95cb952]">
      <div className="w-full flex justify-center">
        <div className="w-30 h-30 relative">
            <Image src={img} fill alt="client" className="rounded-full" />
        </div>
      </div>
      <div className="w-full text-[14.5px] text-center flex justify-center">
        <p className="w-50">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit vero,
          harum iure impedit vel a libero necessitatibus corporis
        </p>
      </div>
    </div>
  );
}
