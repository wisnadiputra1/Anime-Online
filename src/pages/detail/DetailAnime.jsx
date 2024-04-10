import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailAnime = () => {
  let { title } = useParams();
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    async function getAnim() {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${title}`);
      const data = await response.json();
      setAnimes(data.data);
    }
    getAnim();
  }, [title]);

 

  return (
    <div className="bg-zinc-800 lg:w-1/2 lg:mx-auto p-3">
      <h1 className="text-white">{animes.title} Subtitle Indonesia</h1>
      <div className="bg-sky-400 h-1 mb-2"></div>
      <div className="bg-zinc-200 rounded-sm">
        <h2 className="text-center font-medium">Detail {animes.title} Sub Indo</h2>
      </div>
      <div className="bg-zinc-700 mt-2 text-zinc-300 pb-3">
        {animes.images && animes.images.webp && (
          <img
            src={animes.images.webp.image_url}
            alt="Anime"
            className="w-[140px] h-[220px] mx-auto border"
          />
        )}
      
      <div className="m-2">
          <p className="font-medium">
            Judul <span className="px-[67px] font-normal">: {animes.title}</span>
          </p>
          <p className="font-medium">
            Japanese <span className="px-[40px] font-normal">: {animes.title_japanese}</span>
          </p>
          <p className="font-medium">
            Skor <span className="px-[74px] font-normal">: {animes.score}</span>
          </p>
          <p className="font-medium">
            Produser{" "}
            <span className="px-[42px] font-normal">:
              
              {animes.producers && animes.producers.map((producer, index) => (
                <a key={index} href={producer.url}>
                  {" "}
                  {producer.name},{" "}
                </a>
              ))}
            </span>
          </p>
          <p className="font-medium">
            Tipe <span className="px-[77px] font-normal">: {animes.type}</span>
          </p>
          <p className="font-medium">
            Status <span className="px-[64px] font-normal">: {animes.status}</span>
          </p>
          <p className="font-medium">
            Total Episode <span className="px-[12px] font-normal">: {animes.episodes}</span>
          </p>
          <p className="font-medium">
            Durasi <span className="px-[62px] font-normal">: {animes.duration}</span>
          </p>
          <p className="font-medium">
            Tanggal Rilis <span className="px-[18px] font-normal">: {animes.year}</span>
          </p>
          <p className="font-medium">
            Studio 
            <span className="px-[61px] font-normal"> :
              
              {animes.studios && animes.studios.map((studio, index) => (
                <a key={index} href={studio.url}>
                  {" "}
                  {studio.name},{" "}
                </a>
              ))}
            </span>
          </p>
          <p className="font-medium">
            Genre
            <span className="px-16 font-normal"> :
              {animes.genres && animes.genres.map((genre, index) => (
                <a key={index} href={genre.url}>
                  {" "}
                  {genre.name},{" "}
                </a>
              ))}
            </span>
          </p>
          <p className="text-justify mt-3">{animes.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailAnime;
