export default function venue(){
    return(
        <div className="grid venue grid-cols-12 gap-4 container mx-auto px-8 md:mt-8 lg:mt-16 lg:mb-16" id="venue">
            <div className="col-span-12 xl:col-span-10">
                <h4>Lumo&apos;s Winterfest Venue</h4>
                <h1>Denver, Colorado</h1>
            </div>
            <div className="col-span-12 md:col-span-4 xl:col-span-2">
                <a href="https://www.denver.org/" target="_blank">This Year&apos;s Venue</a>
            </div>

            <div className="col-span-12">
               <p>
               Lumo&apos;s Winterfest show is launching in Colorado for its perfect blend of urban sophistication and breathtaking winter landscapes. Denver, with its thriving cultural scene, offers the ideal backdrop for showcasing our 2024/2025 collection, while the nearby Rocky Mountains evoke the heart of winter. Colorado&apos;s unique connection to both modern fashion and the great outdoors reflects the spirit of Lumo’s designs—functional, stylish, and crafted for all winter adventures. It&apos;s the perfect location to unveil a collection that celebrates the beauty and versatility of the season.
               </p>
            </div>
        </div>
    );
}
