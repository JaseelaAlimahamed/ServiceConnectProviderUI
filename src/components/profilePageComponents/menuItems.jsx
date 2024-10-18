import { FaRegUser,  FaShieldAlt, FaLanguage, FaMoon, FaFileAlt, FaQuestionCircle, FaUserFriends, FaSignOutAlt } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoShieldCheckmarkOutline, IoLanguage } from "react-icons/io5";
import { TbEye } from "react-icons/tb";
import { GoShield } from "react-icons/go";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";




const menuItems = [
  {
    title: "Edit Profile",
    icon: <FaRegUser   />,
    route: "/edit-profile",
  },
  {
    title: "Payment Option",
    icon: <RiWallet3Line  />,
    route: "/payment-option",
  },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline  />,
    route: "/notifications",
  },
  {
    title: "Security",
    icon: <IoShieldCheckmarkOutline />,
    route: "/security",
  },
  {
    title: "Language",
    icon: <IoLanguage />,
    route: "/language",
    additionalContent: "English (US)",
  },
  {
    title: "Dark Mode",
    icon: <TbEye />,
    route: "/dark-mode",
  },
  {
    title: "Terms & Conditions",
    icon: <GoShield />,
    route: "/terms",
  },
  {
    title: "Help Center",
    icon: <MdOutlineHelpOutline  />,
    route: "/help",
  },
  {
    title: "Invite Friends",
    icon: <FaUserFriends />,
    route: "/invite-friends",
  },
  {
    title: "Logout",
    icon: <FaPowerOff />,
    route: "/logout",
  },
];

export default menuItems;
