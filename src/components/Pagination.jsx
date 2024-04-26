import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page, handlePageChange, totalPages } = useContext(AppContext) ;



  return (
    <div className='w-full h-20 flex justify-center '>
      <div className='flex gap-[24rem] justify-between items-center  '>
      <div className='flex gap-4'>
      { page > 1 &&
        <button className='bg-gray-400 rounded-md py-2 px-2 ' onClick={() => handlePageChange(page-1)}>Previous</button>
      }
      
      { page  < totalPages &&
        <button className='bg-gray-400 rounded-md py-2 px-2 ' onClick={() => handlePageChange(page+1)}>Next</button>
      }
      </div>

      <p>{page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination