import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {ChevronLeft, ChevronRight} from 'lucide-react'
import Fire from '../../../public/Firee.png'

const Search = () => {
  const [anims, setAnims] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { query } = useParams();

  useEffect(() => {
    async function getAnim(page) {
        const result = await fetch(
          `https://api.jikan.moe/v4/anime?q=${query}&page=${page}`
        );
        const data = await result.json();
        setAnims(data.data);
        setTotalPages(data.pagination.items.total);
        console.log(data);
      }
    setAnims([]);
    getAnim(currentPage);
  }, [currentPage, query]);


  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <main>
      <div className="bg-zinc-800 w-full lg:w-1/2 lg:mx-auto h-full pb-1 mt-3 overflow-hidden">
        <div className="bg-sky-400 pb-[0.1px] mx-3">
          <div className="my-3  pb-1 bg-zinc-700 w-full mt-4">
            <h3 className="bg-bluepurple px-4 py-2 font-bold text-center my-1">
              Situs resmi Anime-Online hanya di Anime-Online.id, selain dari ini
              adalah situs palsu.
            </h3>

            {/* On-Going anime */}
            <div className="flex items-center lg:justify-between px-3">
              <h4 className="lg:w-max w-1/2 text-white font-medium">
                Anime thats contain {query}
              </h4>
            </div>
          </div>
        </div>

        <div className="mb-1 mt-3 mx-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 lg:w-full">
            {anims.length === 0 ? <h2 className="text-white col mx-auto text-lg ">No anime contains {query}</h2> :  anims && anims.map((data) => (
              <Link key={data.mal_id} to={`/anime/${data.mal_id}`} className="max-w-[120px] max-h-[200px] md:max-h-[220px] md:max-w-[140px] mb-10 group">
                <div className="relative cursor-pointer  overflow-hidden">
                  <p className="w-max h-max absolute z-10 px-2 text-white bg-black bg-opacity-70 text-sm">
                    Episodes: {data.episodes}
                  </p>
                  <p className="w-max h-max absolute z-10 right-0 top-[90px] flex items-center justify-around gap-1 bg-blue-500 bg-opacity-90 text-white px-1 rounded-s-md">
                    <img src={Fire} alt="Firee" width="12px" />
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
            ))}
          
        </div>

        {/* pagination */}
      <div className="wful flex justify-center items-center space-x-3">
        <button
          className="bg-white rounded-full"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </button>
        <span className="bg-sky-400 px-2 rounded-full">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-white  rounded-full"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </button>
      </div>
      </div>

      
    </main>
  );
};

export default Search;
