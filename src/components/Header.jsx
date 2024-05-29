import { NavLink } from 'react-router-dom'
import TitleHeader from './TitleHeader'
import InputSearch from './InputSearch'

const Header = () => {

  return (
    <div className="w-full">
        <TitleHeader />
        <nav className="flex items-center bg-sky-400 pb-2">
            <ul className="flex items-center justify-center flex-wrap w-full bg-zinc-800 ">
                <NavLink to="/" className="link px-3 py-3 text-white hover:bg-sky-400  duration-300 font-bold lg:w-max md:w-max w-1/2 text-center">Home</NavLink>
                <NavLink to="/anime-list" className="link px-3 py-3 text-white hover:bg-sky-400 duration-300 font-bold lg:w-max md:w-max w-1/2 text-center">Popular Anime</NavLink>
                <NavLink to="/on-going" className="link px-3 py-3 text-white hover:bg-sky-400 duration-300 font-bold lg:w-max md:w-max w-1/2 text-center">On-Going Anime</NavLink>
                <NavLink to="/genre" className="link px-3 py-3 text-white hover:bg-sky-400 duration-300 font-bold lg:w-max md:w-max w-1/2 text-center">Genre-List</NavLink>

                 {/* Form input start */}
              <InputSearch />
              {/* Form input end */}
            </ul>
        </nav>
    </div>
  )
}

export default Header