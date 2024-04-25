import Card from '../../components/Card'
import { useState, useEffect } from 'react';
import {ChevronLeft, ChevronRight, Loader} from 'lucide-react'

const AnimeList = () => {
  const [populars, setPopulars] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPopulars(page) {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`)
      const data = await response.json();
      setPopulars(data.data);
      setTotalPages(data.pagination.items.total);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setPopulars([])
    getPopulars(currentPage);
  }, [currentPage]);




  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <main >
      {
        loading ? <div className="relative">
          <div className="absolute right-[37%] bg-black bg-opacity-35 z-30">
            <h1 className="text-white z-40 flex">Loading data...<Loader color="#00bfff" className="animate-spin" /></h1>
          </div>
          </div> : null
      }
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
                Popular Anime
              </h4>
              <p className="lg:w-max w-1/2 lg:px-5 bg-blue-700 text-white text-sm text-center">
                POPULAR ANIME
              </p>
            </div>
          </div>
        </div>

        <div className="mb-1 mt-3 mx-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 lg:w-full  ">
          <Card datas={populars} />
        </div>
            {/* pagination */}
        <div className="wful flex justify-center items-center space-x-3 mb-3">
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
  )
}

export default AnimeList
