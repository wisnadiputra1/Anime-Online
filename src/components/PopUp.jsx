
// eslint-disable-next-line react/prop-types
const PopUp = ({timeLeft}) => {
  return (
    <div className='text-white absolute z-20 right-[15%] w-[280px] h-[190px] bg-white drop-shadow-lg'>
        <div className='bg-sky-400 py-1'>
            <h3 className='text-center text-red-600 text-lg font-bold'>Perhatian!!</h3>
        </div>
        <div className="text-black text-center mx-1">
            <h4>Dear pengunjung,</h4>
            <p>Karena masih dalam proses pengembangan, mungkin ada beberapa informasi yang masih mengandung konten <span className="text-red-400 font-bold">18+</span></p>
        </div>
        <p className="text-white bg-sky-400 w-max mx-auto px-2 mt-1 rounded-md">Hilang dalam {timeLeft}</p>
    </div>
  )
}

export default PopUp