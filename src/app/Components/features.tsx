import FeatureBlock from "./featureblock";

export default function features(){
    return(
        <div className="grid grid-cols-12 gap-4 container mx-auto md:px-8 md:mt-8 lg:mt-16 mb-16 p-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 md:flex md:items-stretch">
                <FeatureBlock Title="Innovative Fabrics" Subtitle="Our Best Technology Yet" Text="Lumo’s Winterfest collection uses cutting-edge, weather-resistant fabrics that adapt to your environment. Stay warm without overheating, and enjoy water-repellent, windproof materials that ensure comfort in every condition." Icon="/feature1.png" IconAlt="Lumo Innovation"/>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 md:flex md:items-stretch">
                <FeatureBlock Title="Sustainable Craft" Subtitle="Eco-Friendly and Ethical" Text="Every garment in the 2024/2025 line is crafted with sustainability in mind. We prioritize eco-friendly materials and responsible production practices, ensuring that you can stay stylish while supporting the planet." Icon="/feature2.png" IconAlt="Lumo Sustainable"/>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 md:flex md:items-stretch">
                 <FeatureBlock Title="Tailored Fit" Subtitle="Designed for Every Body" Text="Our Winterfest clothing line features inclusive sizing and tailored fits, making it easy to find pieces that flatter and move with you. Comfort and confidence come standard with every item." Icon="/feature3.png" IconAlt="Lumo Tailored Fit"/>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 md:flex md:items-stretch">
                 <FeatureBlock Title="Versatile Style" Subtitle="Seamless Transition " Text="Whether you're heading to the office or exploring the outdoors, Lumo’s Winterfest collection blends functionality with sleek design. Layer effortlessly for any occasion, making every outfit a statement in warmth and style." Icon="/feature4.png" IconAlt="Versatile Style"/>
            </div>
        </div>
    );
}