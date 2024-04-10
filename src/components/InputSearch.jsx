import { useNavigate } from 'react-router-dom';

const InputSearch = () => {

    
    const router =useNavigate()
   
    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if(e.target.value === ''){
              return;
            }
            router(`/search/${e.target.value}`)
        }
    };

  return (
    <div className=" lg:w-max md:w-max w-screen mx-3 my-2">
         <form  action="">
            <input type="text" placeholder="Search anime..." className="outline-none py-1 px-2 w-full" autoFocus onKeyDown={handleKeyDown} required />
        </form>
    </div>
       
  )
}

export default InputSearch