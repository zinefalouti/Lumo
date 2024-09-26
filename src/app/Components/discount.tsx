import Image from "next/image";

export default function Discount() {
  return (
    <div className="relative mt-32">
      <div className="grid discount grid-cols-12 gap-4 container mx-auto md:px-8 md:mt-8 lg:mt-16 lg:mb-16 p-8">
        <div className="hidden lg:block col-span-5">
          {/* Empty grid column to balance layout */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          <h4>Don&apos;t miss out on exclusive savings!</h4>
          <h1>
            <span>35%</span> Discount on Launch Day
          </h1>
          <a href="#contact">
            Prep For The Winterfest
          </a>
        </div>
        <div className="hidden lg:block lg:absolute bottom-0 left-0 ml-6">
          <Image src="/discount.png" width="460" height="460" alt="Lumot Discount" />
        </div>
      </div>
    </div>
  );
}
