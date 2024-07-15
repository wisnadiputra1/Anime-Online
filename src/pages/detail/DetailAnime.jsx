import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailAnime = () => {
  let { title } = useParams();
  const [animes, setAnimes] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    async function getAnim() {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${title}`);
      const data = await response.json();
      setAnimes(data.data);
      console.log(data.data);
    }
    getAnim();
  }, [title]);

  useEffect(() => {
    const fetchTheme = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${title}/themes`);
      const data = await res.json();
      setTheme(data.data);
      console.log("theme: ", data.data);
    };
    fetchTheme();
  }, [title]);

  if (!animes) {
    return <div>Loading...</div>;
  }

  const youtube_id = animes.trailer.youtube_id;
  const embedUrl =
    animes.trailer.embed_url ||
    `https://www.youtube.com/embed/${youtube_id}?enablejsapi=1&wmode=opaque&autoplay=0`;

  return (
    <div className="bg-zinc-800 lg:w-1/2 lg:mx-auto p-3">
      <h1 className="text-white">{animes.title} Subtitle Indonesia</h1>
      <div className="bg-sky-400 h-1 mb-2"></div>
      <div className="bg-zinc-200 rounded-sm">
        <h2 className="text-center font-medium">
          Detail {animes.title} Sub Indo
        </h2>
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
          <p className="font-medium line-clamp-1">
            Judul{" "}
            <span className="px-[67px] font-normal text-sm">
              : {animes.title}
            </span>
          </p>
          <p className="font-medium line-clamp-1">
            Japanese{" "}
            <span className="px-[40px] font-normal text-sm">
              : {animes.title_japanese}
            </span>
          </p>
          <p className="font-medium line-clamp-1">
            Skor{" "}
            <span className="px-[74px] font-normal text-sm">
              : {animes.score}
            </span>
          </p>
          <p className="font-medium line-clamp-1 ">
            Produser{" "}
            <span className="px-[42px] font-normal text-sm ">
              :
              {animes.producers &&
                animes.producers.map((producer, index) => (
                  <a key={index} href={producer.url}>
                    {" "}
                    {producer.name},{" "}
                  </a>
                ))}
            </span>
          </p>
          <p className="font-medium line-clamp-1">
            Tipe{" "}
            <span className="px-[77px] font-normal text-sm">
              : {animes.type}
            </span>
          </p>
          <p className="font-medium line-clamp-1">
            Status{" "}
            <span className="px-[64px] font-normal text-sm">
              : {animes.status}
            </span>
          </p>
          <p className="font-medium line-clamp-1">
            Total Episode{" "}
            <span className="px-[12px] font-normal text-sm">
              : {animes.episodes}
            </span>
          </p>
          <p className="font-medium line-clamp-1">
            Durasi{" "}
            <span className="px-[62px] font-normal text-sm">
              : {animes.duration}
            </span>
          </p>
          <p className="font-medium line-clamp-1">
            Tanggal Rilis{" "}
            <span className="px-[18px] font-normal text-sm">
              : {animes.year}
            </span>
          </p>
          <p className="font-medium line-clamp-1">
            Studio
            <span className="px-[61px] font-normal text-sm">
              {" "}
              :
              {animes.studios &&
                animes.studios.map((studio, index) => (
                  <a key={index} href={studio.url}>
                    {" "}
                    {studio.name},{" "}
                  </a>
                ))}
            </span>
          </p>
          <p className="font-medium line-clamp-1">
            Genre
            <span className="px-16 font-normal text-sm">
              {" "}
              :
              {animes.genres &&
                animes.genres.map((genre, index) => (
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

      <div className="bg-sky-400 w-full mt-5 rounded-sm">
        <h3 className="w-max mx-auto text-lg font-semibold text-white">
          Tonton Trailer Anime!!
        </h3>
      </div>

      <div className="video-player w-full h-full bg-zinc-700 pb-1 mt-2">
        {/* Embedded YouTube video */}
        <iframe
          className="mx-auto md:w-[570px] md:h-[330px] md:max-w-[1080px] md:max-h-[720px]"
          width="360"
          height="210"
          src={embedUrl}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        ></iframe>

        {/* Link to the original YouTube video */}
        <p className=" w-max mx-auto my-5">
          <a
            className="text-white p-2 bg-sky-600 w-max mx-auto rounded-md"
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>
        </p>
      </div>

      <div className="bg-sky-400 w-full mt-5 rounded-sm">
        <h3 className="w-max mx-auto text-lg font-semibold text-white">
          Anime Theme Song
        </h3>
      </div>

      <div className="w-full h-full bg-zinc-700 pb-1 mt-2 mb-2 p-2 text-white">
        <h1 className="text-xl font-bold text-sky-400">Openings</h1>

        {theme?.openings &&
          theme.openings.map((opening, index) => {
            return <p key={index}>Openings theme : {opening}</p>;
          })}
        <br />
        <h1 className="text-xl font-bold text-sky-400">Endings</h1>
        {theme?.openings &&
          theme.endings.map((opening, index) => {
            return <p key={index}>Endings theme : {opening}</p>;
          })}
      </div>
    </div>
  );
};

export default DetailAnime;
