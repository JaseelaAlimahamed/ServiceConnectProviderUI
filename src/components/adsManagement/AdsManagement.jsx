import React, {useState} from 'react'
import BottomNavBar from '../reUsableComponents/BottomNavbar'
import Navbar from '../reUsableComponents/Navbar'
import AdsCard from './adsCard';
import ButtonComponent from '../reUsableComponents/ButtonComponent';

const AdsManagement = () => {

    const [activeTab, setActiveTab] = useState(true);

    const activeCardData = [
      {
        adtype: "Card",
        title: "Title",
        adID: "AdID",
        views: "420",
        hits: "52",
      },
      {
        adtype: "Banner",
        title: "Title2",
        adID: "AdID2",
        views: "1420",
        hits: "142",
      },
    ];
    const savedCardData = [
        {
            adtype: "Banner",
            title: "Title2",
            adID: "AdID2",
            views: "1420",
            hits: "142",
          },
       
        
      ];

      const handleCreateAd = () =>{
        console.log("create ad triggered")

      }


    const editAd = (adID) =>{
        console.log(adID,"editAd triggered")
    }
  return (
    <div className="w-full min-h-screen bg-[#D9D9DB]">
      <Navbar title="ADS MANAGEMNET" search={true} />

      <div className="py-6 px-2 lg:px-10 lg:w-4/5 m-auto pb-16">
        {/* Tab  */}
        <div className="flex mb-7 bg-tabbgcolor p-1 w-full rounded-xl font-bold overflow-hidden">
          <button
            className={`w-full z-10 px-14 sm:px-20 lg:px-32 py-2 rounded-2xl transition-colors duration-400 
                                ${
                                  activeTab
                                    ? "bg-primary text-black font-semibold"
                                    : "bg-transparent text-primary"
                                }`}
            onClick={() => setActiveTab(true)}
          >
            Active
          </button>
          <button
            className={`w-full z-10 px-14 sm:px-20 lg:px-32 py-2 rounded-2xl transition-colors duration-400 
                                ${
                                  activeTab
                                    ? "bg-transparent text-primary"
                                    : "bg-primary text-black font-semibold"
                                }`}
            onClick={() => setActiveTab(false)}
          >
            Saved
          </button>
        </div>
        {/* Tab  */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeTab &&
            activeCardData.map((card) => (
              <AdsCard key={card.adID} cardData={card} editAd={editAd} />
            ))}
          {!activeTab &&
            savedCardData.map((card) => (
              <AdsCard key={card.adID} cardData={card} editAd={editAd} />
            ))}
        </div>
        <div className="my-8 md:w-2/4 m-auto">
          <ButtonComponent
            type="submit"
            label="+ Create Ad"
            btnHeight="h-[70px]"
            btnWidth="w-full"
            variant="complaint"
            onClick={handleCreateAd}
          />
          

        </div>
      </div>

      <BottomNavBar />
    </div>
  );
  
}

export default AdsManagement