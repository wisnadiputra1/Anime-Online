import { useEffect, useState } from "react";
import Card from "../../components/Card";
import {ChevronLeft, ChevronRight} from 'lucide-react'

const OnGoing = () => {
  const [seasons, setSeasons] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getSeasons(page) {
      const response = await fetch(`https://api.jikan.moe/v4/seasons/now?page=${page}`)
      const data = await response.json();
      setSeasons(data.data);
      console.log(data)
      setTotalPages(data.pagination.items.total);
    }
    setSeasons([])
    getSeasons(currentPage)
  },[currentPage]);

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
                On-Going Anime
              </h4>
              <p className="lg:w-max w-1/2 lg:px-5 bg-blue-700 text-white text-sm text-center">
                ON-GOING ANIME
              </p>
            </div>
          </div>
        </div>

        <div className="mb-1 mt-3 mx-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 lg:w-full  ">
          <Card datas={seasons} />
        </div>
             {/* pagination */}
        <div className="wful flex justify-center items-center space-x-3 mb-3 ">
          <button
            className="bg-white rounded-full"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </button>
          <span className="bg-sky-600 px-2 rounded-full text-white">
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

export default OnGoing;
