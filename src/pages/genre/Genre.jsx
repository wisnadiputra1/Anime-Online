import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Genre = () => {
  const [streams, setStream] = useState([]);

  useEffect(() => {
    async function getStream() {
      const response = await fetch(`https://api.jikan.moe/v4/genres/anime`);
      const data = await response.json();
      setStream(data.data);
      console.log(data);
    }
    getStream();
  }, []);
  return (
    <main className="bg-zinc-800 lg:w-1/2 lg:mx-auto mt-3 py-3">
      <div className="bg-sky-400 pb-2 mb-3 mx-4">
        <div className="bg-zinc-700">
          <h2 className="text-white px-3">Genre List</h2>
        </div>
      </div>

      <div>
        <ul className=" h-full lg:grid-cols-5 grid grid-cols-3 text-center gap-2 lg:mx-5 mx-5">
          {streams
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((stream) => (
              <Link
                key={stream.mal_id}
                className="bg-zinc-200 p-2 mt-1 line-clamp-1 text-sm"
                href=""
              >
                {stream.name}
              </Link>
            ))}
        </ul>
      </div>
      
    </main>
  );
};

export default Genre;
