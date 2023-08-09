import React from "react";
import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import {toast} from 'react-toastify';
const Card = (props) => {
    let courses=props.courses;
    let likedcourses=props.likedcourses;
    let setlikedcourses=props.setlikedcourses;
    function clickHandler()
    {
        //logic
        if(likedcourses.includes(course.id))
        {
            //liked before make it unlike
            setlikedcourses((prev)=>prev.filter((cid)=>(cid!=course.id)));
            toast.success("Liked successfully");
        }
        else{
            //not liked before
            //insert n iked courses
            if(likedcourses.lenght===0)
            {
                    setlikedcourses([course.id]);
            }
            else{
                    setlikedcourses((prev)=>[...prev,course.id]);
            }
            toast.warning("Liked Removed");
        }
       
    }
    let course=props.course;
    return (
        <div className="w-[300px] bg-opacity-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md overflow-hidden">
            <div className="relative">
                <img className="hover:scale-110 transition-all ease-in content-cover overflow-hidden" src={course.image.url}></img>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                
            <button onClick={clickHandler} >
                {
                    likedcourses.includes(course.id)?(<FcLikePlaceholder fontSize="1.75rem" />):(<FcLike fontSize="1.75rem" />)
                }
                    
                </button>
            </div> 
               
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                {
                    course.description.lenght >100 ? (course.description.substr(0,100)) + "..." : (course.description)
                }
                </p>


            </div>
        </div>
    )
}
export default Card;