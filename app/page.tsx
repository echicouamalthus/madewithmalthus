import Image from "next/image";
import profileDeveloper from "@/public/profile.png";

export default function Home() {
  return (
    <main
      className="grid md:grid-cols-2 gap-2 h-screen md:p-4 p-0 md:px-0 px-4 md:my-0 my-5
    "
    >
      <div className="p-3 outline outline-1">
        <div className="relative md:h-full h-72">
          <Image
            className="absolute w-full h-full object-cover"
            src={profileDeveloper}
            priority={true}
            width={900}
            height={900}
            alt="Profile user developer javascript"
          />
        </div>
      </div>
      <div className="md:grid md:place-content-center md:gap-8 flex flex-col justify-between md:h-auto gap-12">
        <div className="">
          <h3>
            <span className="font-sans">Hi ! I&apos;m</span>{" "}
            <span className="">Malthus</span>
          </h3>
          <p className="md:text-7xl text-3xl w-auto md:w-[32rem]">
            Designer of digital products with a focus on user experience
          </p>
        </div>
        <button className="outline outline-1 md:p-3 p-2">Mon CV</button>
      </div>
    </main>
  );
}
