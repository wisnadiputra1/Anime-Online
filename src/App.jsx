import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layout/BaseLayout'
import Home from './pages/home/Home'
import AnimeList from './pages/anime-list/AnimeList'
import OnGoing from './pages/on-going/OnGoing'
import NotFound from './pages/NotFound'
import DetailAnime from './pages/detail/DetailAnime'
import Genre from './pages/genre/Genre'
import Search from './pages/search/Search'



  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {index: true, element: <Home />},
        {path: "/anime-list", element: <AnimeList />},
        {path: "/on-going", element: <OnGoing />},
        {path: "/genre", element: <Genre />},
        {path: "/anime/:title", element: <DetailAnime />},
        {path: "/search/:query", element: <Search />},
      ],
      errorElement: <NotFound />
    }
  ])



export default function App() {
  return(
    <RouterProvider router={router} />
  )
}
