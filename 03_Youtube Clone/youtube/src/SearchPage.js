import React from "react";
import ChannelRow from "./ChannelRow.CSSRule";
import VideoRow from "./VideoRow";
import TuneOutLinedIcon from "@material-ui/icons/tailwind";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutLinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr />

        <channelRow 
           image
           Channel="Clever Programmer"
           verified
           subs="660px"
           noOfVideos={382}
           description="You can find awesome programming"
        />

        <hr />

       <VideoRow 
          
       />

    </div>
    );
}

export default SearchPage;