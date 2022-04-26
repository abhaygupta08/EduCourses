import CourseCard from "../Components/Carousel/CourseCard";
import _items from "../constants/courses";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";

const CoursesPage = () => {
    const [isLoading,setisLoading] = useState(true);
    const history = useHistory()
    
    useEffect(() => {
        setisLoading(false);
    },[])
    if(isLoading) return <Loader/>

    return(
    <div className='bg-white px-4 md:px-36 py-20'>
        <p className="text-sm mb-8"><span className="text-blue-600 cursor-pointer"  onClick={() => {history.push('/')
        window.scroll(0,0)}}>Home</span> {`>>`} <span>Courses</span></p>
        <h1 className="text-3xl font-bold">All Courses</h1>
<div className="flex flex-wrap gap-4 mt-14">

        {
            _items.map(item => <div className="border border-gray-150 rounded-lg"><CourseCard key={item.courseId} item={item} /></div>)
        }

        </div>
    </div>
    )
}

export default CoursesPage;