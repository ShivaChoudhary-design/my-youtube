import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENT_API } from '../utils/constants';
import Comments from './Comments';

const CommentsContainer = () => {

    const[comments,setComments] = useState([]);
    useEffect(()=>{
        commentInfo();


    },[])

    const commentInfo = async ()=>{
        const data = await fetch(YOUTUBE_COMMENT_API);
        const json = await data.json();
        setComments(json.items);
        console.log(json.items);
    }

  return (
    <div className='px-16 py-6'>
        <h1 className='text-xl'>Comments</h1>
        {comments.map((comment)=>
        <Comments key={comment.id} info={comment}/>
        
        )}
        

    </div>
  )
}

export default CommentsContainer