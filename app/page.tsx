import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Start Section */}
      <div className="w-full h-200 border flex justify-between items-center">
        <div></div>

        {/* Main Photo */}
        <div className="w-168.75 h-148.75 relative">
          <Image src={"/assets/main-photo.png"} fill alt="img" />
        </div>
      </div>
    </main>
  );
}
