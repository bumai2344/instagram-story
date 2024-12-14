import logo from '../assets/logo.svg'
import homeIcon from "../assets/home.svg";
import messageIcon from "../assets/message.svg";
import plusIcon from "../assets/plus.svg";
import exploreIcon from "../assets/explore.svg";
import heartIcon from "../assets/heart.svg";
import profileIcon from "../assets/profile.svg";

const menuItems = [
    { id: 1, icon: homeIcon, alt: "Home" },
    { id: 2, icon: messageIcon, alt: "Messages" },
    { id: 3, icon: plusIcon, alt: "Add" },
    { id: 4, icon: exploreIcon, alt: "Explore" },
    { id: 5, icon: heartIcon, alt: "Favorites" },
    { id: 6, icon: profileIcon, alt: "Profile" },
];

export default function Header() {
    return (
        <div className="w-full p-4 max-w-full header-wrapper">
            <div className="container mx-auto w-full flex flex-row justify-between items-center gap-4 sm:gap-0">
                <img src={logo} alt="Logo" className="flex-0.5 w-40 h-auto" />
                <div className="flex-1 w-full input-box">
                    <i className="uil uil-search"></i>
                    <input type="text" placeholder="Search" className="text-sm w-full"/>
                </div>
                <div className="flex-0.5 hidden sm:flex items-center space-x-6">
                    {menuItems.map((item) => (
                        <div key={item.id} className="cursor-pointer hover:opacity-80">
                        <img
                            src={item.icon}
                            alt={item.alt}
                            className="w-6 h-6 object-contain"
                        />
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
  }
  