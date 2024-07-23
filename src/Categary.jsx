
import React from 'react'

export default function Categary({finalCatagory,setCatname}) {

let cat = finalCatagory.map((v,i)=>{
  return(
    <li onClick={()=>setCatname(v)} key = {i} className=' p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2 '>
             {v}
    </li>
  )
})

  return (
    <div>
      <h1 className='text-[25px] font-bold p-[10px]'> Products Catatory</h1>
      <ul> 
{cat}
      </ul>
    </div>
    
  )
}