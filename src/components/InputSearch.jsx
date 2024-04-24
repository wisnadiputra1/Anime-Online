import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const InputSearch = () => {

    
    const [searchTerm, setSearchTerm] = useState('');
    const router = useNavigate();

  const handleKeyDown = async (e) => {
      if (e.key === 'Enter') {
          e.preventDefault();
          if (searchTerm.trim() === '') {
              return;
          }
          router(`/search/${searchTerm}`);
          setSearchTerm('');
      }
  };

  const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
  };

  return (
    <div className=" lg:w-max md:w-max w-screen mx-3 my-2">
         <form  action="">
            <input type="text" placeholder="Search anime..." value={searchTerm} className="outline-none py-1 px-2 w-full" onChange={handleInputChange} onKeyDown={handleKeyDown} required />
        </form>
    </div>
       
  )
}

export default InputSearch
