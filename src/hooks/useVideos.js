import { useState, useEffect } from "react";
import axios from "axios";

const useVideos = (initialDisplayCount) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayVideos, setDisplayVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/video");
      setVideos(res?.data?.videos);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setDisplayVideos(videos?.slice(0, initialDisplayCount));
  }, [videos, initialDisplayCount]);

  const handleShowMore = () => {
    setDisplayVideos(videos?.slice(0, initialDisplayCount + 1));
  };

  const handleShowLess = () => {
    setDisplayVideos(
      videos?.slice(
        0,
        initialDisplayCount > 1 ? initialDisplayCount - 1 : initialDisplayCount
      )
    );
  };

  return [displayVideos, loading, handleShowMore, handleShowLess];
};

export default useVideos;
