"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

type CardProps = {
    showFunc: () => void;
}

export default function AccordionCard({ showFunc }: CardProps) {

  const [active, setActive] = useState<Number | null>(null);

  return (
    <div className="w-130 h-auto bg-purple-500 absolute right-0 bottom-[-92vh] py-6 flex justify-center items-center rounded-2xl">
      <div className="w-120 h-auto bg-mauve-900 px-5 py-10 rounded-md space-y-8 relative">
        <div className="absolute left-2 top-2 cursor-pointer" onClick={(showFunc)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
          </svg>
        </div>
        <h1 className="text-3xl text-center tracking-wide">FAQ</h1>
        <div className="w-full flex flex-col gap-10 text-[#d4caca]">
          <div
            className={`w-full h-auto rounded-b px-3 pb-4 flex flex-col gap-4 border-b duration-200 ${active === 1 ? "text-amber-50" : "text-[#d4caca]"}`}
          >
            <div className="w-full flex items-center">
              <h1>How can I find my comfort</h1>
              <Image
                src={"/icons/chevron-down.png"}
                width={20}
                height={20}
                alt="icon"
                className={`ml-auto cursor-pointer duration-200 ${active === 1 ? "rotate-180" : ""}`}
                onClick={() => {
                  if (active === 1) {
                    setActive(null);
                  } else {
                    setActive(1);
                  }
                }}
              />
            </div>
            {active == 1 && <div>Answer</div>}
          </div>

          <div
            className={`w-full h-auto rounded-b px-3 pb-4 flex flex-col gap-4 border-b duration-200 transition-all ${active === 2 ? "text-amber-50" : "text-[#d4caca]"}`}
          >
            <div className="w-full flex items-center">
              <h1>How can I find my comfort</h1>
              <Image
                src={"/icons/chevron-down.png"}
                width={20}
                height={20}
                alt="icon"
                className={`ml-auto cursor-pointer duration-200 ${active === 2 ? "rotate-180" : ""}`}
                onClick={() => {
                  if (active === 2) {
                    setActive(null);
                  } else {
                    setActive(2);
                  }
                }}
              />
            </div>
            {active == 2 && <div>Answer</div>}
          </div>

          <div
            className={`w-full h-auto rounded-b px-3 pb-4 flex flex-col gap-4 border-b duration-200 transition-all ${active === 3 ? "text-amber-50" : "text-[#d4caca]"}`}
          >
            <div className="w-full flex items-center">
              <h1>How can I find my comfort</h1>
              <Image
                src={"/icons/chevron-down.png"}
                width={20}
                height={20}
                alt="icon"
                className={`ml-auto cursor-pointer duration-200 ${active === 3 ? "rotate-180" : ""}`}
                onClick={() => {
                  if (active === 3) {
                    setActive(null);
                  } else {
                    setActive(3);
                  }
                }}
              />
            </div>
            {active == 3 && <div>Answer</div>}
          </div>

          <div
            className={`w-full h-auto rounded-b px-3 pb-4 flex flex-col gap-4 border-b duration-200 transition-all ${active === 4 ? "text-amber-50" : "text-[#d4caca]"}`}
          >
            <div className="w-full flex items-center">
              <h1>How can I find my comfort</h1>
              <Image
                src={"/icons/chevron-down.png"}
                width={20}
                height={20}
                alt="icon"
                className={`ml-auto cursor-pointer duration-200 ${active === 4 ? "rotate-180" : ""}`}
                onClick={() => {
                  if (active === 4) {
                    setActive(null);
                  } else {
                    setActive(4);
                  }
                }}
              />
            </div>
            {active == 4 && <div>Answer</div>}
          </div>

          <div
            className={`w-full h-auto rounded-b px-3 pb-4 flex flex-col gap-4 border-b duration-200 transition-all ${active === 5 ? "text-amber-50" : "text-[#d4caca]"}`}
          >
            <div className="w-full flex items-center">
              <h1>How can I find my comfort</h1>
              <Image
                src={"/icons/chevron-down.png"}
                width={20}
                height={20}
                alt="icon"
                className={`ml-auto cursor-pointer duration-200 ${active === 5 ? "rotate-180" : ""}`}
                onClick={() => {
                  if (active === 5) {
                    setActive(null);
                  } else {
                    setActive(5);
                  }
                }}
              />
            </div>
            {active == 5 && <div>Answer</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
