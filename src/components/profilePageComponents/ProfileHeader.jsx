import React from "react";

const ProfileHeader = () => {
  return (
<div className="absolute left-1/2 transform -translate-x-1/2 top-[-40px] rounded-xl ">
            <img className="w-[110px] h-[110px] rounded-full border-4 border-profile-border md:w-[125px] md:h-[125px]" src="https://imgcdn.stablediffusionweb.com/2024/3/6/131a1fae-37de-4ca4-88ed-d8eb2b0be3c2.jpg" alt="Profile puture"></img>

            <svg className=" rounded-md  border-profile-border absolute left-[85px] transform -translate-x-1/2 top-[77px] md:left-[100px] md:top-[90px] " width="36" height="36"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="1.5"
                width="39"
                height="39"
                rx="9.5"
                fill="white"
                stroke="#167F71"
                stroke-width="3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.9436 18.8852C23.2756 18.8852 22.7328 18.2459 22.7328 17.459C22.7328 16.6721 23.2756 16.0328 23.9436 16.0328C24.6117 16.0328 25.1545 16.6721 25.1545 17.459C25.1545 18.2459 24.6117 18.8852 23.9436 18.8852ZM23.9436 14.8033C22.691 14.8033 21.6472 16.0328 21.6472 17.5082C21.6472 18.9836 22.6493 20.2131 23.9436 20.2131C25.1962 20.2131 26.2401 18.9836 26.2401 17.5082C26.2401 16.0328 25.1962 14.8033 23.9436 14.8033ZM29.7891 24.3049L26.8664 21.4918L23.8351 24.4033L17.4301 17.3115L12.1273 23.1V14.0164C12.1273 13.623 12.3779 13.3279 12.7119 13.3279H29.2046C29.5386 13.3279 29.7891 13.623 29.7891 14.0164V24.3049ZM29.7891 27.8852C29.7891 28.2787 29.5386 28.5738 29.2046 28.5738H27.6054L24.6618 25.3131L26.8664 23.1639L29.7891 25.9377V27.8852ZM12.7119 28.5738C12.3779 28.5738 12.1273 28.2787 12.1273 27.8852V24.8557L17.4301 19.082L26.0104 28.5738H12.7119ZM29.2463 12H12.7537C11.7933 12 11 12.9344 11 14.0656V27.9344C11 29.0656 11.7933 30 12.7537 30H29.2463C30.2067 30 31 29.0656 31 27.9344V14.0656C31 12.9344 30.2067 12 29.2463 12Z"
                fill="#167F71"
              />
            </svg>
          </div>
  );
};

export default ProfileHeader;