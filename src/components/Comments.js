import React from 'react'

const Comments = ({info}) => {
  const {snippet} = info;
  // 
  
  return (
    <div className='m-4 flex'>
        <img className='w-8 h-8 mr-2 rounded-3xl' alt='user' src={snippet.authorProfileImageUrl}></img>

        <div>
          <p className='font-bold'>{snippet.authorDisplayName}</p>
          <p className='text-s mt-1'>{snippet.textDisplay}</p>
        </div>
    </div>
  )
}

export default Comments