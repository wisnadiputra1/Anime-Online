import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="bg-sky-400 pt-1 mt-3">
            <div className="bg-zinc-800">
                <ul className="grid  md:grid-cols-3 lg:grid-cols-3 lg:w-1/2 lg:mx-auto lg:py-[50px] mx-3 text-zinc-400 gap-4 py-5">
                    <li className="font-medium">
                        About
                        <div className="h-1 bg-zinc-700"></div>
                        <p className="font-normal text-sm">Anime-Online - Cari list dan detail anime yang kamu sayangi disini, selain itu kamu juga bisa melihat seluruh genre anime yang tersedia.</p>
                    </li>
                    <li className="font-medium">Tips
                        <div className="h-1 bg-zinc-700"></div>
                        <p className="font-normal text-sm">Ayo Simpan dan Bookmark halaman Anime-Online di Hp kalian ya!</p>
                    </li>
                    <li className="font-medium">Info
                        <div className="h-1 bg-zinc-700"></div>
                        <p className="font-normal text-sm">Demi kenyamanan dan kemudahan silahkan gunakan Browser Google Crhome.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bg-black py-3">
            <p className="text-zinc-400 text-sm text-center">All rights reserved © Copyright 2024 Anime-Online.Id. Created With ❤️ Powered By TailwindCss & React.Js</p>
        </div>
    </footer>
  )
}

export default Footer