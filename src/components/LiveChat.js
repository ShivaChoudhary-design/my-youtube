import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import generateRandomName, { makeRandomMessage } from '../utils/helper';


const LiveChat = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector((store)=>store.chat.messages);

  useEffect(()=>{
    const i = setInterval(()=>{

      dispatch(
        addMessage({
        name : generateRandomName(),
        message:makeRandomMessage(20),
      })
      );

    },1000);

    return ()=> clearInterval(i);
    

  },[])
  return (
    <div className='w-full mt-6 ml-2 p-2 h-[400px] border border-black bg-slate-100 rounded overflow-y-scroll flex flex-col-reverse'>
        
        {
        chatMessages.map((c,i) =>(
        <ChatMessage key={i}
        name={c.name} 
        message={c.message}/>
        ))
        }
       
        
    </div>
  )
}

export default LiveChat