import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import {ChevronLeft, ChevronRight} from 'lucide-react'

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

        <div className="mb-1 mt-3 mx-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 lg:w-full">
            {anims.length === 0 ? <h2>No anime contains {query}</h2> : <Card datas={anims} />}
          
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
