import {
  activeHistoryIcon,
  activeHomeIcon,
  activeMusicIcon,
  inActiveHistoryIcon,
  inActiveHomeIcon,
  inActiveMusicIcon,
} from "../assets/Images";

const navbarData = [
  {
    id: 1,
    name: "Home",
    activeIcon: activeHomeIcon,
    inActiveIcon: inActiveHomeIcon,
    path: "/home",
  },
  {
    id: 2,
    name: "History",
    activeIcon: activeHistoryIcon,
    inActiveIcon: inActiveHistoryIcon,
    path: "/history",
  },
  {
    id: 3,
    name: "Music",
    activeIcon: activeMusicIcon,
    inActiveIcon: inActiveMusicIcon,
    path: "/share-your-music",
  },
];
export { navbarData };
