import Image from "next/image";

export default function about(){
    return(

        <div className="grid grid-cols-12 gap-4 container mx-auto md:px-8 md:mt-8 lg:mt-16 p-8" id="winterfest">
             <div className="col-span-12 lg:col-span-6 xl:pt-12">
                  <h1>The Year's Winterfest</h1>
                  <p className="mt-8">
                  Introducing Lumo's Winterfest 2024/2025, where warmth meets cutting-edge style. This season’s collection blends modern, functional designs with premium fabrics to keep you cozy during the coldest months. From sleek, insulated jackets to effortlessly stylish knitwear, each piece is crafted with both comfort and fashion in mind. Whether you're hitting the slopes or strolling through the city, Lumo's Winterfest line ensures you're prepared for every winter adventure—while looking your absolute best. Stay ahead of the trends and embrace the chill with confidence.
                  </p>
             </div>
             <div className="col-span-12 pt-4 lg:pt-0 lg:col-span-6 xl:col-span-5 xl:col-start-8">
                 <Image src="/about-img.png" width="1600" height="1600" alt="Lumo About Us"/>
             </div>
        </div>

    );
}