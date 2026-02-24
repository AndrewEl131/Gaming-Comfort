import React from "react";
import Image from "next/image";

type CategoryProps = {
    img: string;
    title: string;
    desc: string;
}

export default function CategoryItem({ img, title, desc }: CategoryProps) {
  return (
    <div className="w-62 h-95 py-3 space-y-3">
      <div className="w-full h-42 relative bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 rounded-t-md">
        <Image src={img} fill alt={title} />
      </div>

      <div className="w-full space-y-4">
        <h1 className="text-2xl font-bold text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] text-center">
          {title}
        </h1>

        <p className="text-[15px] font-light text-center secondary-font">
          {desc}
        </p>

        <div className="flex justify-center">
          <button className="text-white bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-6 py-2.5 text-center leading-5 rounded-md cursor-pointer">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}
