import FleetLgBlock from './fleetLgBlock';
import Image from 'next/image';

export default function fleet(){
    return(

        <div className="grid grid-cols-12 gap-4 container mx-auto md:px-8 md:mt-8 lg:mt-16 lg:mb-16 p-8" id="fleet">
            <div className="col-span-12">
                <h1>Upcoming Fleet</h1>
            </div>

            <div className="col-span-12 lg:col-span-6">
                <FleetLgBlock ImgSrc="/fleet1.png" Title="Ice Duchess" ImgAlt="Ice Duchess Fur Coats"/>
            </div>

            <div className="col-span-6 fleetimg lg:col-span-3 mt-4">
                <Image src="/fleet2.png" width="440" height="440" alt="Ice Duchess"/>
            </div>

            <div className="col-span-6 fleetimg lg:col-span-3 mt-4">
                <Image src="/fleet3.png" width="440" height="440" alt="Ice Duchess"/>
            </div>

            <div className="col-span-6 fleetimg lg:col-span-3 mt-4">
                <Image src="/fleet4.png" width="440" height="440" alt="Arctic Puff"/>
            </div>

            <div className="col-span-6 fleetimg lg:col-span-3 mt-4">
                <Image src="/fleet5.png" width="440" height="440" alt="Arctic Puff"/>
            </div>

            <div className="col-span-12 lg:col-span-6">
                <FleetLgBlock ImgSrc="/fleet6.png" Title="Arctic Puff" ImgAlt="Arctic Puff"/>
            </div>

            <div className="col-span-12 lg:col-span-6">
                <FleetLgBlock ImgSrc="/fleet7.png" Title="Chic Frost" ImgAlt="Chic Frost"/>
            </div>

            <div className="col-span-6 fleetimg lg:col-span-3 mt-4">
                <Image src="/fleet8.png" width="440" height="440" alt="Chic Frost"/>
            </div>

            <div className="col-span-6 fleetimg lg:col-span-3 mt-4">
                <Image src="/fleet9.png" width="440" height="440" alt="Chic Frost"/>
            </div>

        </div>

    );
}