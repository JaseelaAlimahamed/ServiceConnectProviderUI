import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const sections = [
  { title: "How do I manage my notifications?", content: "To manage notifications, go to 'Settings,' select 'Notification Settings,' and customize your preferences." },
  { title: "How do I start a guided meditation session?", content: "To start a guided meditation session, open the 'Meditation' tab, choose a session, and press 'Start.'" },
  { title: "How do I join a support group?", content: "Go to the 'Community' section, find a group that matches your interests, and click 'Join'; some groups may require admin approval.'" },
  { title: "How do I manage my notification?", content: "Navigate to 'Settings' > 'Notification Preferences' to customize alerts, mute specific notifications, or adjust their frequency." },
  { title: "Is my data safe and private?", content: "Your data is encrypted and protected by strict privacy policies, with no sharing without consent; enable two-factor authentication for added security." }
];

function GeneralButton() {
  const [visibleSections, setVisibleSections] = useState(
    Array(sections.length).fill(false) 
  );

  const toggleContent = (index) => {
    setVisibleSections((prev) =>
      prev.map((isVisible, i) => (i === index ? !isVisible : isVisible))
    );
  };

  return (
    <div className="p-2">
      {sections.map((section, index) => (
        <div
          key={index}
          className="sm:w-m h-auto backdrop-blur-md text-lg bg-helpcenter-clr text-secondary font-medium rounded-3xl mt-5 p-3  shadow-md"
        >
          <div className="flex justify-between items-center">
            <span>{section.title}</span>
            <FaChevronDown
              className="cursor-pointer"
              onClick={() => toggleContent(index)}
            />
          </div>
          {visibleSections[index] && (
            <div className="mt-2 ml-2">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default GeneralButton;
