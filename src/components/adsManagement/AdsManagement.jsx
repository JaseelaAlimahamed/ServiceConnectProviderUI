import React, { useState } from 'react'
import AdsCard from './adsCard';
import ButtonComponent from '../reUsableComponents/ButtonComponent';
import TabComponent from './TabComponent';
import { useNavigate } from 'react-router-dom';

const AdsManagement = () => {

  const [activeTab, setActiveTab] = useState(true);
  const navigate = useNavigate();

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

  const handleCreateAd = () => {
    console.log("create ad triggered")
    navigate('/post-ad')

  }


  const editAd = (adID) => {
    console.log(adID, "editAd triggered")
  }
  return (
    <div className="w-full min-h-screen bg-light-gray font-input">

      <div className="py-6 px-2 lg:px-10 lg:w-4/5 m-auto pb-16">

        <TabComponent col1label="Active" col2label="Saved" activeTab={activeTab} setActiveTab={setActiveTab} />

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

    </div>
  );

}

export default AdsManagement