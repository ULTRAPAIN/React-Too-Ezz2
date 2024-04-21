import React from 'react';
import './App.css';
// eslint-disable-next-line
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
//eslint-disable-next-line
import {filterData,apiUrl} from './data'
//eslint-disable-next-line
import {toast} from 'react-toastify'

function App() {
  const [courses,setCourses]=useState(null)
  const [loading,setloading]=useState(true)
  //eslint-disable-next-line
  const [category,setCategory]=useState(filterData[0].title)
  async function fetchData(){
    setloading(true)
    try{
      const res= await fetch(apiUrl)
      const output=await res.json();
      setCourses(output.data)
    }
    catch(error){
      toast.error("API Error")
    }
    setloading(false)
  }

  useEffect(()=>{
    fetchData();

  },[]);
// eslint-disable-next-line
  return (
    <>
  <div className=' min-h-screen flex flex-col'>
    <div className=''>
         <Navbar />
    </div>
    <div className='bg-blue-700'>
    <div className=''>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
    </div>
    <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[100vh]'>
      {
        loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
      }
        
    </div>
    </div>
  </div>
    </>
  );
}

export default App;
