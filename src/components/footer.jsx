import homeIcon from "../assets/home.svg";
import searchIcon from "../assets/search.svg";
import reelIcon from "../assets/reel.svg";
import shopIcon from "../assets/shop.svg";
import heartIcon from "../assets/heart.svg";

const navItems = [
    { id: 1, icon: homeIcon, alt: "Home" },
    { id: 2, icon: searchIcon, alt: "Search" },
    { id: 3, icon: reelIcon, alt: "Reels" },
    { id: 4, icon: shopIcon, alt: "Shop" },
    { id: 5, icon: heartIcon, alt: "Favorites" },
  ];

export default function Footer() {
    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 text-white flex justify-around p-3 footer">
                {navItems.map((item, index) => (
                    <div key={index} className="cursor-pointer hover:opacity-80">
                    <img
                        src={item.icon}
                        alt={item.alt}
                        className="w-6 h-6 object-contain"
                    />
                    </div>
                ))}
            </div>
        </>
    ) 
}
