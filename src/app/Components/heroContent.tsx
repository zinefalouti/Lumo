import Image from "next/image";

export default function heroContent() {
  return (
    <div  id="hero" className="grid grid-cols-12 container mx-auto md:px-8">
      <div className="col-span-12 md:col-span-8 xl:col-span-6 space-y-1 md:space-y-10 mt-16 md:mt-32 md:mb-32">
        <h4>Embrace the Chill</h4>
        <h1>
          Lumo's <span>Winter Fest</span> Collection <span>2024-2025</span>
        </h1>
        <p>Stay warm, stylish, and ready for winter.</p>
        <div className="lumobutton lg:w-1/2">
          <a href="#">
            <Image
              src="/btn-arrow.png"
              width="23"
              height="23"
              alt="Lumo Button Arrow"
           />
            Prep For The Winterfest
          </a>
        </div>
        <div className="pt-2">
        <a href="#contact">Check Last Year's Edition</a>
        </div>
      </div>
      <div className="hidden xl:grid xl:col-span-6 mt-12 justify-items-end">
          <Image src="/heromodel.png" width="560" height="560" alt="Lumo Official Model"/>
      </div>
    </div>
  );
}
