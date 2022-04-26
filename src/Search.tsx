import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CourseCard from "./Components/Carousel/CourseCard";
import Loader from "./Components/Loader";
import {CourseFinder} from './utils'


const Search = () => {
    const history = useHistory();
    const [isLoading,setisLoading] = useState(true);
    useEffect(() => {
        setisLoading(false);
    },[])
          {/* 
    // @ts-ignore */}
    const params = (new URL(window.location)).searchParams;
    const title = params.get('title');
    const rating = params.get('rating');
    const instructor = params.get('instructor');
    const catagory = params.get('catagory');
          {/* 
    // @ts-ignore */}
    const result = CourseFinder(title,rating,instructor,catagory)
    
    if(isLoading) return <Loader />
    return(
        <div className='px-4 md:px-36 py-20 bg-white'>
        <p className="text-sm mb-8"><span className="text-blue-600 cursor-pointer" onClick={() => {history.push('/')}}>Home</span> <span className="tracking-tighter">{`>>`}</span> <span>Search</span> <span className="tracking-tighter">{`>>`}</span> <span>{title || catagory}</span></p>

        <h1 className="text-3xl font-bold font-roboto">Search Results</h1>
        <div className="flex flex-wrap gap-4 mt-8">
            
        {
            result.length > 0 ? result.map(item => 
                <div className="border border-gray-300 inline-block rounded-lg">
{/* 
    // @ts-ignore */}
        <CourseCard item={item} />
            </div>
        ) : <div className="mt-14 text-sm text-center w-full">No results found</div>
    }
    </div>
        </div>
    )
}





export default Search;