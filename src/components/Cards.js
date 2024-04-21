import React, { useState } from 'react'
import Card from './Card'

function Cards({courses ,category}) {
   
    const [likedcourses,setlikedcourses]=useState([])
    const getCourses=()=>{
        if(category==="All"){
            let allcourses=[];
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allcourses.push(course)
                })
            })
            return allcourses
        }
        else{
            // main sirf specific category ka data pass karunga 
            return courses[category]
        }
       
    }
    return (
        <>
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {getCourses().map((course)=>
          (<Card key={course.id} data={course} likedcourses={likedcourses} setlikedcourses={setlikedcourses}/>))}
        </div>
        </>
    )
}

export default Cards
