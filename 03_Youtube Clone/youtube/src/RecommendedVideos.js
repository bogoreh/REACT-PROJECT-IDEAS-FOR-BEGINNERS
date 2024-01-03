import React from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
           <h2>Recommended</h2>
           <div className="recommendedVideos__videos">
              <VideoCard 
                title="Become a Web Developer in 10 minutes | 2019/2020"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage=""
                channel="Sonny Sangha"
                image=""
              />
              <VideoCard 
                title="Whether we like it or not..."
                views="2M Views"
                timestamp="4 days ago"
                channelImage=""
                channel="Christian Guzman"
                image=""
              />
              <VideoCard 
                title="5 Uses for cloud functions"
                views="2M Views"
                timestamp="4 days ago"
                channelImage=""
                channel="Christian Guzman"
                image=""
              />
               <VideoCard 
                title="The Truth about OnePlus Nord!"
                views="2M Views"
                timestamp="58 Minutes ago"
                channelImage=""
                channel="Marques Brownlee"
                image=""
              />
              <VideoCard 
                title="Elon Musk says Teslas are too expensive!"
                views="1.2M Views"
                timestamp="3 days ago"
                channelImage=""
                channel="Sonny Sangha"
                image=""
              />
              <VideoCard 
                title="Elon Musk says Teslas are too expensive!"
                views="1.2M Views"
                timestamp="3 days ago"
                channelImage=""
                channel="Sonny Sangha"
                image=""
              />
              <VideoCard 
                title="Elon Musk says Teslas are too expensive!"
                views="1.2M Views"
                timestamp="3 days ago"
                channelImage=""
                channel="Sonny Sangha"
                image=""
              />
              <VideoCard 
                title="Elon Musk says Teslas are too expensive!"
                views="1.2M Views"
                timestamp="3 days ago"
                channelImage=""
                channel="Sonny Sangha"
                image=""
              />
           </div>
    </div>
  )
}

export default RecommendedVideos;