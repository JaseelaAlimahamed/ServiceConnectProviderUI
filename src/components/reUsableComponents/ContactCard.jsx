import React from "react";

const ContactCard = ({ type, data, selected, onClick }) => {
  return (
    <div
      className={`h-[80px] mt-3 w-[360px] bg-[#736A68] shadow-md rounded-xl flex justify-start items-center cursor-pointer ${
        selected ? "border-2 border-white" : ""
      }`} // Conditionally apply white border if card is selected
      onClick={onClick}
    >
      <div className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 26 26"
        >
          <g fill="white" fillRule="evenodd" clipRule="evenodd">
            <path d="M20 7H6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 20 7M6.5 18V8h13v10z" />
            <path d="m20.324 7.88-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 6 7h14a.5.5 0 0 1 .324.88M18.642 8H7.345l5.612 4.841z" />
            <path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" />
          </g>
        </svg>
      </div>
      <div className="p-2 flex flex-col gap-1"> {/* Added gap-1 for spacing */}
        {type === "email" ? (
          <>
            <p className="text-white text-[12px]">Via Email</p>
            <p className="text-white text-[14px]">{data.email}</p>
          </>
        ) : (
          <>
            <p className="text-white text-[12px]">Via Sms</p>
            <p className="text-white text-[12px]">
              <span>({data.countryCode})</span> {data.phone}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
