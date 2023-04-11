import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function TweatCard({ tweat, handleLike }) {
  return (
    <div key={tweat.id} className="p-6 border-b border-gray-300">
      <div className="flex space-x-3">
        <img
          className="h-12 w-12 rounded-full"
          src={tweat.user.profile_image_url}
          alt=""
        />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{tweat.user.first_name}</h3>
            <p className="text-sm text-gray-500">{tweat.company_name}</p>
          </div>
          <p className="text-sm pb-1">{tweat.text}</p>
          <div className="flex items-center mt-2 text-pink-500">
            <AiOutlineHeart
              className="cursor-pointer hover:text-pink-700 mr-2"
              onClick={() => handleLike(tweat.id)}
            />
            <span>{tweat.likes_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweatCard;
