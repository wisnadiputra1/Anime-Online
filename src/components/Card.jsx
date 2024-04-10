
import { Link } from "react-router-dom";

const Card = ({datas}) => {

  return datas && datas.map((data) => (
    <Link key={data.mal_id} to={`/anime/${data.mal_id}`} className="max-w-[120px] max-h-[200px] md:max-h-[220px] md:max-w-[140px] mb-10 group">
      <div className="relative cursor-pointer  overflow-hidden">
        <p className="w-max h-max absolute z-10 px-2 text-white bg-black bg-opacity-70 text-sm">
          Episodes: {data.episodes}
        </p>
        <p className="w-max h-max absolute z-10 right-0 top-[90px] flex items-center justify-around gap-1 bg-blue-500 bg-opacity-90 text-white px-1 rounded-s-md">
          <img src="./public/Firee.png" alt="Firee" width="12px" />
          {data.score}
        </p>
        {data.images && data.images.webp && (
          <img
            src={data.images.webp.image_url}
            alt="Anime"
            className="w-[120px] h-[200px] md:w-[140px] md:h-[220px] "
          />
        )}
        <h2 className={`z-20 w-[120px]  h-[70px] md:w-[140px] md:h-[90px] text-center absolute bottom-[0.1px] mx-auto text-white bg-black bg-opacity-70 px-2 py-1 text-sm line-clamp-1 translate-y-[70%] group-hover:translate-y-[0] group-hover:line-clamp-3 transition duration-500`} >
          {data.title}
        </h2>
      </div>
    </Link>
  ));
};

export default Card;
