// src/data/menuItems.js

import EditIcon from "../../assets/edit-profile.svg";
import PaymentIcon from "../../assets/payment-option.svg";
import NotificationIcon from "../../assets/notifications.svg";
import SecurityIcon from "../../assets/security.svg";
import LanguageIcon from "../../assets/language.svg";
import DarkModeIcon from "../../assets/dark-mode.svg";
import TermsIcon from "../../assets/terms.svg";
import HelpIcon from "../../assets/help-center.svg";
import InviteIcon from "../../assets/invite-friends.svg";
import LogoutIcon from "../../assets/logout.svg";

const menuItems = [
  {
    title: "Edit Profile",
    icon: EditIcon,
    route: "/edit-profile",
  },
  {
    title: "Payment Option",
    icon: PaymentIcon,
    route: "/payment-option",
  },
  {
    title: "Notifications",
    icon: NotificationIcon,
    route: "/notifications",
  },
  {
    title: "Security",
    icon: SecurityIcon,
    route: "/security",
  },
  {
    title: "Language",
    icon: LanguageIcon,
    route: "/language",
    additionalContent: "English (US)",
  },
  {
    title: "Dark Mode",
    icon: DarkModeIcon,
    route: "/dark-mode",
  },
  {
    title: "Terms & Conditions",
    icon: TermsIcon,
    route: "/terms",
  },
  {
    title: "Help Center",
    icon: HelpIcon,
    route: "/help",
  },
  {
    title: "Invite Friends",
    icon: InviteIcon,
    route: "/invite-friends",
  },
  {
    title: "Logout",
    icon: LogoutIcon,
    route: "/logout",
  },
];

export default menuItems;
