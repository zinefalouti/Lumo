import Image from "next/image";

interface FleetLgBlockProps {
    ImgSrc: string;
    Title: string;
    ImgAlt: string;
  }


export default function fleetLgBlock({ImgSrc,Title, ImgAlt}: FleetLgBlockProps){
    return(


        <div className="fleetblock mt-6">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 xl:col-span-6 p-8 space-y-2">
                   <Image src="/clothicon.png" width="100" height="100" alt="Lumo Winterfest Line"/>
                   <h4>Winter Fest Line</h4>
                   <h2>{Title}</h2>
                   <a href="#contact"><Image src="/featurebtn.png" width="60" height="60" alt="Lumo Feature"/></a>
                </div>
                <div className="hidden xl:block xl:col-span-6 xl:justify-self-end">
                   <Image src={ImgSrc} width="330" height="330" alt={ImgAlt}/>
                </div>
            </div>
        </div>

    );
}
