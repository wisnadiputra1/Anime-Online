import { useState, useEffect } from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [animes, setAnimes] = useState([]);
  const [seasons, setSeasons] = useState([])

  useEffect(() => {
    async function getAnim() {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=15`);
      const data = await response.json();
      setAnimes(data.data);
      console.log(data.data)
    }

    
    async function getSeasons() {
      const response = await fetch(`https://api.jikan.moe/v4/seasons/now?limit=10`)
      const data = await response.json();
      setSeasons(data.data);
    }
    getAnim();

    setTimeout(() => {
      getSeasons()
    }, 1500);
    
  }, []);

  


  return (
    <main>
      <div className="bg-zinc-800 w-full lg:w-1/2 lg:mx-auto h-full pb-1 mt-3 overflow-hidden">
        <div className="bg-sky-400 pb-[0.1px] mx-3">
          <div className="my-3  pb-1 bg-zinc-700 w-full mt-4">
            <h3 className="bg-bluepurple px-4 py-2 font-bold text-center my-1">
              Situs resmi Anime-Online hanya di Anime-Online.id, selain dari ini
              adalah situs palsu.
            </h3>

            {/* Popular anime */}
            <Link to="/anime-list">
              <div className="flex items-center lg:justify-between px-3">
                <h4 className="lg:w-max w-1/2 text-white font-medium">
                  Popular Anime
                </h4>
                <p className="lg:w-max w-1/2 lg:px-5 bg-blue-700 text-white text-sm text-center">
                  POPULAR ANIME LAINNYA
                </p>
              </div>
            </Link>
            {/* Popular anime */}
          </div>
        </div>
            {/* popular card */}
            <div className="mt-3 mx-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 lg:w-full">
              <Card datas={animes} />
            </div>

            {/* On-going anime */}
            <Link to="/on-going">
              <div className=" bg-sky-400 pb-3  mx-3">
                  <div className="flex items-center lg:justify-between px-1 py-1 bg-zinc-700">
                  <h4 className="lg:w-max w-1/2 mx-3 text-white font-medium">On-Going Anime</h4>
                  <p className="lg:w-max w-1/2 mx-3 lg:px-5 bg-blue-700 text-white text-sm text-center">ANIME ON-GOING LAINNYA</p>
                  </div>
              </div>
            </Link>
            {/* On-going anime */}

            {/* On-going card */}
            <div className="mb-1 mt-3 mx-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 lg:w-full ">
              <Card datas={seasons} />
            </div>
      </div>
    </main>
  );
};

export default Home;
