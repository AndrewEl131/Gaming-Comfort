import React from "react";

export default function Footer() {
  return (
    <footer className="min-h-160">
      <div className="w-full h-100 border-b flex flex-col gap-20 justify-center items-center">
        <h1 className="text-7xl text-center">Find your comfort...</h1>
        <div className="w-100 h-10">
          <label className="block mb-2.5 text-sm font-medium text-heading sr-only ">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-body"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Start searching your things"
              required
            />
            <button
              type="button"
              className="absolute inset-e-1.5 bottom-1.5 text-white bg-blue-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-evenly">
        <div className="w-50 py-5 text-center space-y-2">
            <h1 className="text-3xl">Navigation</h1>
            <hr />
            <ul className="flex flex-col gap-1 text-[22px] secondary-font">
                <li>Home</li>
                <li>Gallery</li>
                <li>Categories</li>
            </ul>
        </div>

        <div className="w-70 py-5 text-center space-y-2">
            <h1 className="text-3xl">Contact</h1>
            <hr />
            <ul className="flex flex-col gap-1 text-[21px] secondary-font">
                <li>Sarajishvili street av.1</li>
                <li>gaming-comfort@email.com</li>
                <li>+000 321 123</li>
            </ul>
        </div>

        <div className="w-50 py-5 text-center space-y-2">
            <h1 className="text-3xl">Our Team</h1>
            <hr />
            <ul className="flex flex-col gap-1 text-[22px] secondary-font">
                <li>LinkedIn</li>
                <li>Mail</li>
                <li>Whatsapp</li>
            </ul>
        </div>

        <div className="w-50 py-5 text-center space-y-2">
            <h1 className="text-3xl">Social</h1>
            <hr />
            <ul className="flex flex-col gap-1 text-[22px] secondary-font">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>X</li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
