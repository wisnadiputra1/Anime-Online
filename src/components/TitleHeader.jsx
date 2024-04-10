import React from "react";

const TitleHeader = () => {
  return (
    <div className="bg-black py-5 w-full lg:bg-zinc-700 md:bg-zinc-700">
      <div className="md:w-1/2 lg:mx-auto md:ml-2 text-center lg:text-left">
        <h1 className="text-white  font-extrabold text-4xl">
          ANIME-<span className="text-sky-400">ONLINE</span>.ID
        </h1>
        <p className="text-white">
          List Anime <span className="text-sky-400">Terbaruuu!!<span className="ml-1 text-black bg-zinc-50 rounded-sm">アニメオンライン</span></span>
        </p>
      </div>
    </div>
  );
};

export default TitleHeader;
