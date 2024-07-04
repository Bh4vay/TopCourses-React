import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    const [readMore, setReadmore] = useState(false);
    const [like, setLike] = useState(false);

    function readmoreHandler(){
        setReadmore(!readMore);
    }

    function likeHandler(){
        
        if(like){
            toast.warning("Like Removed");
        }
        else{
            toast.success("Liked Successfully");
        }
        setLike(!like);
    }

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt={course.image.alt}/>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
                grid place-items-center'>
                <button onClick={likeHandler}>
                    {
                        like ? (<FcLike/>) : (<FcLikePlaceholder/>)
                    }
                    
                </button>
            </div>
            </div>
            
            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                    course.description.length > 100 && !readMore ? course.description.substr(0,100)+"...." : course.description 
                    }
                    <span onClick={readmoreHandler} font-bold> 
                        {readMore ? "See Less" : "Read More"}
                    </span>
                </p>
            </div>
            
        </div>
    )
}

export default Card