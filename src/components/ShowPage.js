import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux';
import {closeMenu} from '../utils/appSlice'
import {useSearchParams} from 'react-router-dom'
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const ShowPage = () => {
    const [searchParam] = useSearchParams();
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    }, [])
  return (
  <div className='w-full'>
    <div className='flex '>
        <div className='pl-16 py-6'>
      
         <iframe width="780"
         height="400" 
         src={"https://www.youtube.com/embed/" + searchParam.get("v") }
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media;
         gyroscope; picture-in-picture; web-share" 
         allowfullScreen>

         </iframe>
        
        </div>
      <div >
        <LiveChat/>

      </div>

    </div>
    
    <CommentsContainer/>
    </div>
  )
}

export default ShowPage