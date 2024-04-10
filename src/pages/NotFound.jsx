

const NotFound = () => {
  return (
    <div>
        <div className='bg-zinc-800 h-screen lg:max-w-[1024px] lg:mx-auto w-full'>
          <img src="../src/assets/notFound.png" className="w-[230px] mx-auto pt-10" alt="Samurai Dog" />
          <div className="mx-auto w-max h-max">
            <h2 className=" text-white text-8xl lg:text-9xl text-center font-bold">4<span className="text-sky-400">0</span>4</h2>
            <p className="text-white text-2xl text-center">Page not found</p>
            <p className="text-sky-400 pt-2">May Caused by Wrong Credential</p>
        </div>
      </div>
    </div>
    
   
  )
}

export default NotFound