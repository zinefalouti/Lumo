import Image from "next/image";

export default function footer() {
  const MenuData = [
    { menuItem: "The Winter Fest", menuUri: "#winterfest" },
    { menuItem: "Upcoming Fleet", menuUri: "#fleet" },
    { menuItem: "The Venue", menuUri: "#venue" },
    {
      menuItem: "Lumo Shop",
      menuUri: "https://en.wikipedia.org/wiki/Winter_clothing",
    },
  ];

  return (
    <div className="container footer mx-auto px-8 md:mt-8 lg:mt-16 p-8">
          <Image src="/logo.png" width="210" height="130" alt="Lumo Logo"/>
          <nav className="navbar md:gap-6">
            {MenuData.map((item, index) => (
              <a key={index} href={item.menuUri} className="nav-item">
                {item.menuItem}
              </a>
            ))}
          </nav>

          <div className="social gap-4">
             <a href="#"><Image src="/facebook.png" width="40" height="40" alt="Lumo Facebook"/></a>
             <a href="#"><Image src="/youtube.png" width="40" height="40" alt="Lumo Youtube"/></a>
             <a href="#"><Image src="/instagram.png" width="40" height="40" alt="Lumo Instagram"/></a>
             <a href="#"><Image src="/pinterest.png" width="40" height="40" alt="Lumo Pinterest"/></a>
          </div>
           
          <hr></hr>

          <h4>LUMO OFFICIAL © BY ZINE. E. FALOUTI ALL RIGHTS RESERVED 2025</h4>

    </div>
  );
}
