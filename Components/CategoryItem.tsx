import React from "react";
import Image from "next/image";

type CategoryProps = {
    img: string;
    title: string;
    desc: string;
}

export default function CategoryItem({ img, title, desc }: CategoryProps) {
  return (
    <div className="w-70 h-92 px-5 py-3.5 space-y-6 bg-[#18181B] rounded-md">
      <div className="w-full h-42 relative bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 rounded-md">
        <Image src={img} fill alt={title} />
      </div>

      <div className="w-full space-y-4">
        <h1 className="text-2xl font-bold text-white text-center">
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
