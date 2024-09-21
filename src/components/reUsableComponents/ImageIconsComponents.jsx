import React from 'react';

const ImageIconsComponent = ({ iconsConfig }) => {
  return (
    <div className="flex space-x-4">
      {iconsConfig.map((icon, index) => (
        <div key={index} >
          <img
            src={icon.src} // Icon source (image URL)
            alt={icon.alt || 'icon'} // Alt text for accessibility
            width={icon.width } // Default width is 40 if not provided
            height={icon.height} // Default height is 40 if not provided
            className={icon.className || ''} // Optional additional CSS classes
          />
        </div>
      ))}
    </div>
  );
};

export default ImageIconsComponent;

     
