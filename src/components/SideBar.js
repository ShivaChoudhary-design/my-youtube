import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOption);
  if(!isMenuOpen) return null;
  
  return (
    <div className='w-40 p-5 shadow-lg'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>History</li>
            <li>Library</li>
        </ul>
        <h1 className='font-bold pt-3'>Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Live</li>
          <li>News</li>
          <li>Learning</li>
          <li>Liked videos</li>
        </ul>
        <h1 className='pt-2 font-bold'>Subscriptions</h1>
        <ul>
            <li>Karan Aujla</li>
            <li>Flying Beast</li>
            <li>Akshay Saini</li>
            <li>CarryMinati</li>
        </ul>
        <h1 className='pt-2 font-bold'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        

    </div>
  )
}

export default SideBar