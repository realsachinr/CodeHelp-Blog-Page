import React, { useContext } from 'react'
import {AppContext } from "../context/AppContext.jsx"
import Spinner from './Spinner.jsx'

const Blogs = () => {

  const {loading, posts} = useContext(AppContext);

  return (
    <div className='w-full h-full flex justify-center flex-col items-center  left-[50%]'>
        {loading ? (<Spinner/>) : (
          posts.length === 0 ? 
          (<div>
            <p>No Post Found</p>  
          </div>) : 
          (posts.map( (post) => ( <div key={post.id} className='flex flex-col mt-4 justify-center items-center  w-full h-full   mb-10 '>
      <div className='max-w-[40rem]'>
      <p className='font-bold'>{post.title}</p>
        <p>
            By <span>{post.author}</span> on <span>{post.category}</span>
        </p>
        <p>Posted on : {post.date}</p>
        <p className=' text-justify  '>{post.content}</p>
        <div>{post.tags.map((tag) => {
            return <span className='text-blue-800 text-bold cursor-pointer ' key={post.id}>{`#${tag}`}</span>
        })}</div>
      </div>
    </div>)) )
        )}
    </div>
  )
}

export default Blogs