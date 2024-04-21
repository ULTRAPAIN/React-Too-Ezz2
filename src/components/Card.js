import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'
import { useState } from 'react'

function Card({data ,likedcourses,setlikedcourses}) {

    const[readMore,setReadmore]=useState(false)
    const description =readMore?data.description:`${data.description.substring(0,100)}...`

    function readmoreHandler(){
        setReadmore(!readMore)
    }
    function clickHandler(){
        // logic
        if(likedcourses.includes(data.id)){
            // pehle se like hua pada hai 
            setlikedcourses((prev)=>{
                    setlikedcourses(prev.filter((cid)=>(cid !== data.id) ))
                    toast.warning("like removed");
            })
            
        }
        else{
            // pehle se like nahi hai isme
            // matlab insert karna padega
            if(likedcourses.length=== 0){
                setlikedcourses([data.id])
            }
            else{
                setlikedcourses((prev)=>[...prev,data.id])
            }
            toast.success("liked Successfully")
        }

    }
    return (
        <>
        <div className='w-[320px] bg-blue-950 rounded-md overflow-hidden bg-opacity-85'>
            <div className='relative'>
                <img src={data.image.url} alt={data.id}/>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3  grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedcourses.includes(data.id) ? ( < FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                       
                    </button>
                </div>
            </div>
            <div>
                <p className='font-semibold text-white text-lg leading-6 text-center'>{data.title}</p>
                <p className='text-white text-opacity-50 mt-3 text-center mb-2'>
                    {description}
                    <span className=' text-green-400 font-semibold cursor-pointer' onClick={readmoreHandler}>{readMore?'...show Less':'show More'}</span>
                    </p>
            </div>
        </div>
        </>
    )
}

export default Card
