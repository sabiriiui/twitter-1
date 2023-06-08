import React from "react";

function RightSide() {
  return (
    <div className="bg-gray-100 rounded-md shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">Trends for you</h2>
      <ul className="list-none">
        <li className="flex flex-col py-2">
          <span className="text-gray-600 mr-2">Trending in Pakistan</span>
          <div className="text-black hover:underline text-xl">#ReactJS</div>
          <span className="text-gray-600 ml-2">10.9k Tweets</span>
        </li>
        <li className="flex flex-col py-2">
          <span className="text-gray-600 mr-2">Trending in Pakistan</span>
          <div className="text-black hover:underline text-xl">#TailwindCSS</div>
          <span className="text-gray-600 ml-2">8.3k Tweets</span>
        </li>
        <li className="flex flex-col py-2">
          <span className="text-gray-600 mr-2">Trending in Pakistan</span>
          <div className="text-black hover:underline text-xl">#JavaScript</div>
          <span className="text-gray-600 ml-2">12.5k Tweets</span>
        </li>
        <li className="flex flex-col py-2">
          <span className="text-gray-600 mr-2">Trending in Pakistan</span>
          <div className="text-black hover:underline text-xl">
            #WebDevelopment
          </div>
          <span className="text-gray-600 ml-2">7.2k Tweets</span>
        </li>
        <li className="flex flex-col py-2">
          <span className="text-gray-600 mr-2">Trending in Pakistan</span>
          <div className="text-black hover:underline text-xl">#Frontend</div>
          <span className="text-gray-600 ml-2">7.1k Tweets</span>
        </li>
      </ul>
    </div>
  );
}

export default RightSide;
