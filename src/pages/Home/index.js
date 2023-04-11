import React, { useCallback, useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import AppWrapper from "../../components/AppWrapper";
import { getTimeline, likePost } from "../../API";
import TweatCard from "../../components/TweatCard";
import Loader from "../../components/Loader";

function Home() {
  const [tweats, setTweats] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const getTweats = useCallback(async () => {
    if (isLoading) {
      return;
    }
    if (isLastPage) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const response = await getTimeline(page);
    if (response.totalPages === page) {
      setIsLastPage(true);
    }
    setTweats([...tweats, ...response.data]); // append new tweats to existing list
    setPage(page + 1); // increment page number for next API call
    setIsLoading(false);
  }, [page, tweats, isLastPage, isLoading]);

  useEffect(() => {
    getTweats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLike = (tweatId) => {
    likePost(tweatId);
    const likedTweatIndex = tweats.findIndex(({ id }) => id === tweatId);
    const focusedTweat = tweats[likedTweatIndex];
    const withNewLike = {
      ...focusedTweat,
      likes_count: focusedTweat.likes_count + 1,
    };
    const updateTweats = [...tweats];
    updateTweats.splice(likedTweatIndex, 1, withNewLike);
    setTweats(updateTweats);
  };

  return (
    <AppWrapper>
      <div style={{ minWidth: "40vw" }}>
        <LazyLoad height={500}>
          {tweats.map((tweat) => {
            return (
              <TweatCard key={tweat.id} tweat={tweat} handleLike={handleLike} />
            );
          })}
        </LazyLoad>
        {!isLastPage && !isLoading ? (
          <div
            className="w-full flex items-center border border-gray-300 my-3 p-3 justify-center cursor-pointer hover:bg-gray-200"
            onClick={getTweats}
          >
            Show more...
          </div>
        ) : (
          ""
        )}
        {isLoading && <Loader />}
      </div>
    </AppWrapper>
  );
}

export default Home;
