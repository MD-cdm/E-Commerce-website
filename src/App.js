import logo from './logo.svg';
import './App.css';
import Categary from './Categary';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
let [finalCatagory,setFinalCatagory]=useState([])
let [finalPro,setFinalProducts]=useState([])

let [catName,setCatname]=useState("")



let getCategory = ()=>{  //function create.
   axios.get('https://dummyjson.com/products/category-list')
   .then((res)=>res.data)
   .then((finalRes)=>{
       setFinalCatagory(finalRes)
   })
  }

  let getProucts = ()=>{  //function create.
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setFinalProducts(finalRes.products)
    })
   }
  useEffect(()=>{
    getCategory();
    getProucts();
  },[])

useEffect(()=>{
if(catName!==""){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setFinalProducts(finalRes.products)
    })
   
}
},[catName])

let Pitems=finalPro.map((products,index)=>{
  return(
    <ProductItems key={index} pdata={products}/>
  )
})

  return (
    <>
      <div className='px-[40px] bg-[#99dbbb]'>
        <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
        <div className='max-w-[1320px] max-auto'>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              <Categary finalCatagory={finalCatagory} setCatname={setCatname} />
            </div>    
            <div>
                <div className='grid grid-cols-3 gap-5'>
                
                 {
                    finalPro.length>=1 ?
                 Pitems
                 :
                 "No Product Found"
                 }
               
                </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
}

export default App;

function ProductItems({pdata}){

  return(
  <div className='shadow-lg text-center pb-4'>
       <img  src={pdata.thumbnail} className='w-[100%] h-[250px]'/>
       <h4>
        {pdata.title}

       </h4>
       <b>Rs {pdata.price}</b>
</div>
)
}











