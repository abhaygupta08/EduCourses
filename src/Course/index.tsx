import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import _items from "../constants/courses";
 
const Course = () => {
    const [isLoading,setisLoading] = useState(true);
    const history = useHistory()
    
    useEffect(() => {
        setisLoading(false);
    },[])
          {/* 
    // @ts-ignore */}
    const { courseId } = useParams();
    if(isLoading) return <Loader/>
    if(!courseId) return <div>No course selected</div>;
    
    const course = _items.find(item => item.courseId === courseId);
    return (
        <div className='bg-white px-4 md:px-36 py-20'>
        <p className="text-sm mb-8"><span className="text-blue-600 cursor-pointer" onClick={() => {history.push('/')
    window.scroll(0,0)
    }}>Home</span> {`>>`} <span className="text-blue-600 cursor-pointer" onClick={() => {history.push('/courses')
          {/* 
    // @ts-ignore */}
    window.scroll(0,0)}}>Courses</span> {'>>'} <span className="">{course.title}</span></p>
            
            
            
            <div className="flex justify-between gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-4 md:w-3/5">
                          {/* 
    // @ts-ignore */}
                    <h1 className="font-bold text-3xl">{course.title}</h1>
                    <div className="flex gap-3">
                        
                        
                        <div className="flex flex-col h-20 w-20 justify-center items-center shadow rounded-md">
                            <h3 className="text-xl">03</h3>
                            <span className="text-sm">Months</span>
                        </div>

                        <div className="flex flex-col h-20 w-20 justify-center items-center shadow rounded-md">
                            <h3 className="text-xl">04</h3>
                            <span className="text-sm">Days</span>
                        </div>

                        <div className="flex flex-col h-20 w-20 justify-center items-center shadow rounded-md">
                            <h3 className="text-xl">13</h3>
                            <span className="text-sm">Minutes</span>
                        </div>



                    </div>
                        
                    <div className="video-frame mt-10 rounded-lg shadow w-full border border-gray-250 flex justify-center items-center">
                        <img src={"https://cdn.dribbble.com/users/34556/screenshots/1680799/media/c5f815d13a3ad373bf44bae116bc84d9.gif"} className='rounded-lg' alt=""/>
                </div>
                    </div>
                    <div className="flex flex-col gap-4 bg-gray-100 px-10 py-10 md:w-2/5 text-sm rounded-lg">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex gap-2 justify-between flex-col md:flex-row">
                                <div className="flex gap-1 items-center"><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg></span>
<span>
    29th January, 2022
    </span>
</div>
                                <div className="flex gap-1 items-center">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></span>
<span>
    9:40-12:34
    </span>
    </div>
                                </div>
                                <div className="flex gap-2 justify-between flex-col md:flex-row">
                                <div className="flex gap-1 items-center">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
</svg></span>
                                    <span>
                                        3.6k+ Seats Booked
                                        </span>
                                    </div>
                                <div className="flex gap-1 items-center">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                                    </span>
                                    <span>
                                        Delhi, IN
                                        </span>

                                    </div>
                                </div>
                        </div>
                        
                            <div className="flex gap-2 items-center md:items-end mt-6 md:mt-0">
                                      {/* 
    // @ts-ignore */}
                            <div className="line-through">{course.price}</div>
                            <div className="text-xl font-bold">{course?.discountedPrice}</div>
                            </div>
                            <button className="text-center py-3 text-white font-semibold w-full uppercase text-sm bg-blue-600 rounded">book a seat</button>
                            <p className="text-sm">You must be <span className="text-blue-600 cursor-pointer">logged in</span> to able to register</p>


                            <div className="flex flex-col mt-4">

                            <div className="flex justify-between py-2">
                                    <div className="uppercase">total seats</div>
                                    <div>4k</div>
                                </div>
                                <div className=" border-t border-b py-2 border-gray-350 flex justify-between">
                                    <div className="uppercase">booked seats</div>
                                    <div>3.6k</div>
                                </div>
                                <div className="flex justify-between py-2">
                                    <div className="uppercase">remaining seats</div>
                                    <div>400</div>
                                </div>
                            
                            </div>

                            <div>
                                <h2 className="font-roboto text-lg font-semibold mt-4">Share this Event</h2>
                                <div className="flex flex-col gap-2 text-lg">
                                    S O C I A L
                                </div>
                            </div>
                        
                    </div>
            </div>
        
        
        </div>
    )
}

export default Course;