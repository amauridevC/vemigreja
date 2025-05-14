"use client"; 
import ReactPlayer from "react-player";

export default function VideoComponent() {
    return (
      <div className="overflow-hidden rounded-lg"> 
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=aGDgD5coc_M"
          width="100%"
          height="200px"
        />
      </div>
    );
  }
  