import React from "react";
import Image from "next/image";

export default function page() {
  const categories = [
  {
    title: "Input Devices",
    img: "/category/input.png",
    bgColor: "rgba(79, 70, 229, 0.3)",
  },
  {
    title: "Displays",
    img: "/category/monitor.png",
    bgColor: "rgba(14, 165, 233, 0.3)",
  },
  {
    title: "Audio",
    img: "/category/headset.png",
    bgColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    title: "Controllers",
    img: "/category/controller.png",
    bgColor: "rgba(245, 158, 11, 0.3)",
  },
  {
    title: "Furniture",
    img: "/category/chair.png",
    bgColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    title: "Cables & Adapters",
    img: "/category/cabel.png",
    bgColor: "rgba(100, 116, 139, 0.3)",
  },
  {
    title: "Storage",
    img: "/category/ssd.png",
    bgColor: "rgba(20, 184, 166, 0.3)",
  },
  {
    title: "Networking",
    img: "/category/wifi.png",
    bgColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    title: "Power & Charging",
    img: "/category/charger.png",
    bgColor: "rgba(239, 68, 68, 0.3)",
  },
  {
    title: "Mounts & Stands",
    img: "/category/stand.png",
    bgColor: "rgba(107, 114, 128, 0.3)",
  },
  {
    title: "Cooling & Maintenance",
    img: "/category/cooler.png",
    bgColor: "rgba(34, 197, 94, 0.3)",
  },
  {
    title: "Accessories",
    img: "/category/setting.png",
    bgColor: "rgba(236, 72, 153, 0.3)",
  },
];

  return (
    <main className="w-full min-h-screen">
      <div className="w-full h-90 text-white text-5xl flex justify-center items-center bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium">
        <h1>All Categories</h1>
      </div>
      <div className="w-full py-16 flex justify-center">
        <div className="grid grid-cols-4 gap-2">
          {categories.map((category, index) => (
            <div className="w-80 h-65 space-y-4" key={index}>
              <div className="w-40 h-25 mx-auto relative" >
                <Image src={category.img} fill alt="icon" />
              </div>
              <h1 className="text-[20px] text-center">{category.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
