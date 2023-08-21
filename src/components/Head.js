import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from '../utils/constants';


const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  useEffect(() => {

    const timer = setTimeout(()=>getSearchSuggestions(),200);

    return()=>{
      clearInterval(timer);
    }

    //make an api call after every key press
    //but if the difference b/w 2 api calls is <200ms
    //then decline the API call

  },[searchQuery])

  const getSearchSuggestions = async () =>{
   
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

  }

  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col m-2 p-3 shadow-md'>
        <div className='flex col-span-1 '>
        <img
             onClick={()=>toggleMenuHandler()}
             className='h-8 cursor-pointer' 
             alt = "menu"
             src='https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg'/>
            <img className='h-8 mx-3' 
             alt='logo' 
             src='https://www.shutterstock.com/image-vector/zdolbuniv-ukraine-march-29-2023-260nw-2281736185.jpg'></img>
             
        </div>
        <div className='col-span-10 px-10 '>
          <div>
            <input 
            className='w-1/2 border border-gray-400 rounded-l-full p-1 px-4'  
            type='text'
            value = {searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}

            />

            
            <button className='border border-gray-400 rounded-r-full py-1 px-5 bg-gray-100'>🔍</button>
          </div>
          {showSuggestions &&
            (<div className='absolute bg-white py-2 px-2 w-[27rem] shadow-lg rounded-lg border border-gray-100'>
              <ul>
                {suggestions.map((s)=><li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>)}
                
              </ul>
            </div>)
            }
        </div>
          
        <div className='col-span-1'>
            <img className='h-8' alt = "user" src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>

        </div>
    </div>
  )
}

export default Head