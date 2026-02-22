import React from "react";
import Image from "next/image";

export default function Navigation() {
  return (
    <header className="w-full h-12.5 fixed top-0 bg-transparent flex items-center justify-between px-5">
      <div className="h-full flex-1">
        <div className="w-25 h-full relative">
          <Image src={"/assets/gaming-icon.png"} fill alt="icon" />
        </div>
      </div>
      <ul className="h-full flex justify-center items-center gap-8 text-[16.5px] flex-1">
        <li>Home</li>
        <li>Gallery</li>
        <li>Categories</li>
        <li>FAQ</li>
      </ul>

      <div className="h-full flex justify-end items-center flex-1 gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 24 24"
        >
          <path d="M8.5 10.5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5S14 7 12 7s-3.5 1.5-3.5 3.5m5 0c0 .88-.62 1.5-1.5 1.5s-1.5-.62-1.5-1.5S11.12 9 12 9s1.5.62 1.5 1.5"></path>
          <path d="m20.53 7.15-8-5c-.32-.2-.74-.2-1.06 0l-8 5c-.29.18-.47.5-.47.85v8c0 .34.18.67.47.85l8 5a1.01 1.01 0 0 0 1.06 0l8-5c.29-.18.47-.5.47-.85V8c0-.34-.18-.67-.47-.85M12 19.82l-3.1-1.94c.55-.56 1.29-.88 2.1-.88h2c.8 0 1.55.32 2.1.88zm7-4.38-2.19 1.37A4.97 4.97 0 0 0 13 15h-2c-1.48 0-2.87.68-3.81 1.81L5 15.44V8.55l7-4.38 7 4.38z"></path>
        </svg>

        <h1>Login</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#ffffff"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C9.24 2 7 4.24 7 7v1H4c-.55 0-1 .45-1 1v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-.55-.45-1-1-1h-3V7c0-2.76-2.24-5-5-5M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v1H9zm10 3v10H5V10z"></path>
        </svg>
      </div>
    </header>
  );
}
