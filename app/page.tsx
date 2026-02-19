import Image from "next/image";
import RainbowText from "./RainbowText";

export default function Home() {
  return (
    <main>
      {/* Starter section */}
      <div className="w-full h-screen flex justify-center items-center starter-section">
        <div className="w-275 h-125 py-5 px-5 flex flex-col items-center gap-16">
          <div className="space-y-2.5 text-center">
            <h1 className="text-7xl">Make your own comfort</h1>
            <p className="text-2xl">Right now, in here...</p>
          </div>

          <div className="w-100 h-10">
            <label
              className="block mb-2.5 text-sm font-medium text-heading sr-only "
            >
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
                    stroke-width="2"
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
      </div>
    </main>
  );
}
