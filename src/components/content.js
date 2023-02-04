import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayButton } from "../assets/images/index";
import useVideos from "../hooks/useVideos";

const contentTitle = "Ready to have your cake and eat it too?";
const contentText =
  "Start by designing the experience you have in mind. We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next.";

const VideoContent = () => {
  const [displayCount, setDisplayCount] = useState(1);
  const [videos, loadingApi, handleShowMore, handleShowLess] =
    useVideos(displayCount);
  if (loadingApi) return <p>Loading...</p>;
  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <div className="lg:flex flex-col sm:flex-row">
            <div className="lg:w-1/2 py-6 px-24 text-blackish">
              <h2 className="heading text-md lg:text-lg">{video.title}</h2>
              <p
                className="text-blackish text-sm lg:text-md"
                dangerouslySetInnerHTML={{
                  __html: video.description,
                }}
              />
            </div>
            <div className="w-full py-6 lg:px-24">
              <div className="relative overflow-hidden w-500 h-500 flex items-center justify-center lg:float-right">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={600}
                  height={500}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 mx-auto w-[600px] bg-videoOverlay opacity-75 rounded-lg"></div>
                <button className="w-24 h-24 absolute m-auto m-auto inset-0 flex items-center justify-center">
                  <Link
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={PlayButton} alt="playbtn" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex lg:px-24 section justify-center lg:justify-start">
        <button
          className="button rounded-full p-4 mr-4"
          onClick={() => handleShowMore(setDisplayCount)}
        >
          Show More
        </button>
        <button
          className="button rounded-full p-4"
          onClick={() => handleShowLess(setDisplayCount)}
        >
          Show Less
        </button>
      </div>
      <div className="text-center section">
        <h2 className="heading text-blackish text-md lg:text-lg">
          {contentTitle}
        </h2>
        <p className="text-blackish lg:w-6/12 mx-auto text-sm lg:text-md">
          {contentText}
        </p>
      </div>
    </div>
  );
};

export default VideoContent;
