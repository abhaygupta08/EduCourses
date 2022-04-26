import StarFilled from '../../assets/img/ui_components/starFilled.svg'
import StarOutline from '../../assets/img/ui_components/starOutline.svg'
import Book from '../../assets/img/ui_components/book-open.svg'
import Clock from '../../assets/img/ui_components/clock.svg'
import {useHistory} from 'react-router-dom';
import { ReactElement, useEffect, useState } from 'react';
import Loader from '../Loader';
// interface CourseCardProps {
// item : itemObj;
// }

// interface itemObj{
//     imgUrl : string;
//     title : string;
//     price : string;
//     rating : number;
//     discountedPrice : string;
//     instructor : string;
//     catagory : string;
//     reviewCount : string;
//     courseId : string;
// }
      {/* 
    // @ts-ignore */}
const CourseCard = ({item} : CourseCardProps) : ReactElement => {
    const [isLoading,setisLoading] = useState(true);
    const history = useHistory()
    
    useEffect(() => {
        setisLoading(false);
    },[])
      {/* 
    // @ts-ignore */}
    const {imgUrl , title , price ,discountedPrice, rating , instructor,catagory,reviewCount,courseId } : itemObj = item;
    // const {imgUrl , title , price ,discountedPrice, rating , instructor,catagory,reviewCount } = {
    //     imgUrl : 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    //     title : 'Web Developement zero to hero course',
    //     price : '$20',
    //     discountedPrice : '$15.99',
    //     rating : 4.5,
    //     instructor : 'John Doe',
    //     catagory : 'Web Development',
    //     reviewCount : '3.5k+',

    // }

    if(isLoading) return <Loader/>

    return (<div 
    className="h-full bg-white text-sm px-3 py-3 rounded-lg w-72 md:w-80 flex flex-col gap-2">
                <div className="carousel__slide-item-img-link"
                    onClick={()=>{
                        history.push(`/courses/${courseId}`)
                        window.scroll(0,0)
                    }}
                
                >

    <img src={imgUrl} className="rounded-lg" alt=""/>
</div>
    <div className=" flex gap-2 items-center">
        <button className="rounded-md px-3 py-1 bg-red-350 text-white">Certificate</button>
        <button className="text-blue-700"
            onClick={()=>{
                history.push(`/search?title=&rating=&instructor=&catagory=${catagory}`)
                window.scroll(0,0)
            }}
        
        >{catagory} </button>
    </div>
    <h3 className="font-semibold text-lg leading-6 cursor-pointer font-roboto"
    onClick={()=>{
        history.push(`/courses/${courseId}`)
        window.scroll(0,0)
    }}
    >{title}</h3>
    <p>by <button
    onClick={()=>{
        history.push(`/search?title=&rating=&instructor=${instructor}&catagory=`)
        window.scroll(0,0)
    }}
    >{instructor}</button></p>
    <div className="flex justify-between">
        <div className="flex flex-col gap-2 md:gap-0.5">
            <div className="flex md:gap-2 flex-col md:flex-row">

            <div className="flex gap-1">
                <span className='flex gap-px'>
{                
Array(Math.floor(rating)).fill(0).map((_, i) => 
<img key={i} src={StarFilled} className="h-4" alt=""/>
)
}
{                
Array(5 - Math.floor(rating)).fill(0).map((i) => 
<img key={i} src={StarOutline} className="h-4" alt=""/>
)
}


                </span>
                <span>
                    {rating}
                </span>
            </div>
            <div>
            ({reviewCount} Reviews)
            </div>
        </div>

        <div className='flex items-center gap-2'>
            <span className='flex gap-1 items-center'>
                <img src={Book} className="h-4" alt=""/>
                
                <span>

            20 lessons
                </span>
            </span>
            <span className='flex gap-1 items-center'>
                <img src={Clock} className="h-4" alt=""/>
                
                <span>

            20h 20min
                </span>
            </span>
        </div>
            </div>
        <div className="flex flex-col gap-0.5 items-end">

<span className="line-through">
    {price}
    </span>
<span className="text-md font-semibold">
    {discountedPrice}
</span>
</div>
    </div>
    </div>)
}

export default CourseCard