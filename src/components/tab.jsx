import { useState } from "react";
import publicationIcon from "../assets/publication.svg";
import reelsIcon from "../assets/reel.svg";
import markIcon from "../assets/mark.svg";

const TabMenu = () => {
    const tabs = [
      { label: "Publications", icon: publicationIcon },
      { label: "Reels", icon: reelsIcon },
      { label: "Marks", icon: markIcon },
    ];
  
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div className="text-white pt-4 w-full">
        <div className="flex justify-center items-center space-x-10 relative">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center cursor-pointer pb-2 ${
                activeTab === index ? "text-white" : "text-gray-500"
              }`}
            >
              <img src={tab.icon} className="w-4 h-4 object-contain mr-1"/>
              <span className="hidden sm:flex text-sm uppercase">{tab.label}</span>
            </div>
          ))}
          </div>
    </div>
  );
};
export default TabMenu;
