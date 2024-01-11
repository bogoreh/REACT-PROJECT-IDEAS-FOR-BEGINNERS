import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumUpAltoutlinedIcon from "@material-ui/icons/ThumUpAltoutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SidebarRow from "./SidebarRow";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow selected icon={HomeIcon} title="Home" />
        <SidebarRow icon={WhatshotIcon} title="Trending" /> 
        <SidebarRow icon={SubscriptionsIcon} title="Subscription" /> 
        <hr/>
        <SidebarRow icon={VideoLibraryIcon} title="Library" />
        <SidebarRow icon={HistoryIcon} title="History" /> 
        <SidebarRow icon={OndemandVideoIcon} title="Your videos" />
        <SidebarRow icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow icon={ThumUpAltoutlinedIcon} title="Liked videos" />
        <SidebarRow icon={ExpandMoreOutlinedIcon} title="Show More" />
        <hr />
    </div>
  );
}

export default Sidebar;