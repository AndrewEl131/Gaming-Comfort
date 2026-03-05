import CategoryItem from "@/Components/CategoryItem";
import Client from "@/Components/Client";
import { ClientTicker } from "@/Components/ClientTicker";
import Image from "next/image";

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
      </div>
      {/* Category Section */}
      <div className="w-full h-130 py-10 flex flex-col gap-11.5">
        <h1 className="text-center text-5xl solid-font">
          Check main things for your future setup
        </h1>
        <div className="w-full flex justify-evenly">
          <CategoryItem
            img="/icons/controller-icon.png"
            title="Controller"
            desc="Controller its main thing for Design and comfort in game time"
          />
          <CategoryItem
            img="/icons/keyboard.png"
            title="Keyboard"
            desc="Keyboard is first seen when taking photos of setup"
          />
          <CategoryItem
            img="/icons/gaming-chair.png"
            title="Gaming Chair"
            desc="Gaming chair is main thing for your comfort and design in your setup"
          />
          <CategoryItem
            img="/icons/mouse.png"
            title="Mouse"
            desc="Mouse has lot of variants, because its for your hand comfort"
          />
        </div>
      </div>
      {/* Client Setup */}
      <div className="w-full h-220 flex mt-10">
        <div className="w-[50vw] flex justify-center items-center">
          <div className="w-140 h-155 flex flex-col items-center gap-32 py-5 bg-[#800080c9] rounded-md">
            <div className="space-y-5 flex flex-col items-center mt-5">
              <h1 className="secondary-font text-[21px]">Our client's setup</h1>

              <h1 className="text-5xl text-center w-100">
                We Always Here For Help.
              </h1>
            </div>

            <div className="w-100 h-50 flex flex-col items-center gap-6">
              <p className="text-[22px] text-center">
                Share your homegrown crops, and an expert chef will craft a
                seasonal brunch. Celebrate fresh flavors, community, and
                farm-to-table dining—straight from your hands to the plate!
              </p>

              <button className="text-white w-50 bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-6 py-2.5 text-center leading-5 rounded-md cursor-pointer">
                Watch
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50vw] relative">
          <Image src={"/assets/client-setup.jpg"} fill alt="setup" />
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full flex flex-col items-center gap-8 py-30">
        <h1 className="text-5xl font-semibold">Find our shop</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2106.648322188154!2d44.78120570141073!3d41.69352492261199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cc00a79a799%3A0x8accaace2cb10853!2sMtatsminda%20Park!5e0!3m2!1sen!2sge!4v1772552290968!5m2!1sen!2sge"
          width="1200"
          height="500"
          loading="lazy"
        ></iframe>
      </div>

      {/* Clients Section */}
      <div className="w-full">
        <ClientTicker />
      </div>
    </main>
  );
}
