import Hero from './Components/Hero'
import University1 from '../assets/img/university/1 (1).png';
import University2 from '../assets/img/university/1 (2).png';
import University3 from '../assets/img/university/1 (1).svg';
import University4 from '../assets/img/university/1 (2).svg';
import ArrowRight from '../assets/img/ui_components/chevron-right.svg';
// import CourseCard from '../Components/CourseCard';
import Carousel from '../Components/Carousel';
import '../Components/Carousel/carousel.css';
import { CourseCatagoryList, InstructorList } from '../utils';
import RupeeIcon from '../assets/img/ui_components/currency_rupee_black_24dp.svg';
import AwardIcon from '../assets/img/ui_components/emoji_events_black_24dp.svg';
import tick from '../assets/img/ui_components/tick.svg';
import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import VideoIcon from '../assets/img/ui_components/video.svg';
import CourseIcon from '../assets/img/ui_components/golf_course_black_24dp.svg';



const instructorImg = [
    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
]

interface FeaturesComponentProps{
    text : string;
    img : string;
}
const FeaturesComponent = ({text, img} : FeaturesComponentProps)  : ReactElement=> {
    
    return(
        <div className='bg-gray-50 shadow px-4 py-3 h-52 w-52 flex flex-col gap-2 justify-center items-center rounded-lg'>
    <img src={img} className="h-20" alt=""/>
    <div className='text-center'>{text}</div>
    </div>    
    )
}
interface CatagoryComponentProps{
    img : string;
    catagory : string;
    count : number;
}
const CatagoryComponent = ({img,catagory,count} : CatagoryComponentProps) : ReactElement => {
    const history = useHistory();
    return(
        <div
        onClick={()=> {history.push(`/search?title=&rating=0.0&instructor=&catagory=${catagory}`); window.scroll(0,0);} } className='cursor-pointer shadow mx-1 my-2 bg-white h-60 w-60 text-center px-4 py-3 flex flex-col justify-center items-center rounded-lg'>
        <img src={img} className='h-14' alt='' />   
        <h3 className='mt-2 font-semibold font-roboto'>{catagory}</h3>
        <p className='text-sm'>Over {count} courses</p>
        </div>
    )
}

// interface InstructorCardProps{
//     img : string;
//     name : string;
//     students : number;
//     reviews : number;
// }

      {/* 
    // @ts-ignore */}
const InstructorCard = ({img,name,students,reviews} : InstructorCardProps) : ReactElement => {
    const history = useHistory();
    return (
        <div
        onClick={() => {
            history.push(`/search?title=&rating=&instructor=${name}&catagory=`)
            window.scroll(0,0)
        }} 
        className='shadow cursor-pointer mx-1 my-2 border border-gray-250 w-60 text-center flex flex-col justify-between items-center rounded-xl'>
            <img src={img} className="rounded-t-xl rounded-b" alt=""/>
            <div className='w-full px-4 py-3 text-center'>
                <h3 className='font-semibold mb-4'>{name}</h3>
                <div className='w-full flex justify-between'>
                <p className='text-sm flex items-center gap-1'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg></span>
                    <span>

                    {students} students
                    </span>
                    </p>
                <p className='text-sm flex gap-1 items-center'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
                        </span>
                        <span>
                            {reviews} reviews
                            </span>
                            </p>
                    </div>
            </div>
        </div>
    )
}

const Home: React.FC = () => {
    const history = useHistory();

    return(
<>
<Hero />


{/* University section */}
<div className='bg-white px-4 md:px-36 py-20 flex flex-wrap gap-4 justify-center md:justify-between items-center'>
<img src={University1} className="h-24" alt=""/>
<img src={University2} className="h-12" alt=""/>
<img src={University3} className="h-36" alt=""/>
<img src={University4} className="h-36" alt=""/>
</div>

<div className='px-4 md:px-36 pt-14 flex flex-col gap-4 justify-between items-center'>
    <div className='flex flex-col md:flex-row justify-between w-full'>
        <h2 className='text-3xl font-semibold font-serif'>Featured Courses</h2>
        <button className='flex gap-1 items-center'>
            <span onClick={() => {
                history.push('/courses')
                window.scroll(0,0)
            }}>
                Browse All
            </span>
            <img src={ArrowRight} className="h-5" alt=""/>
            </button>
    </div>

<Carousel />
</div>

<div className='bg-white px-4 md:px-36 py-20 flex flex-wrap gap-4 justify-center md:justify-between items-center'>
            
<FeaturesComponent img={tick} text={`Comprehensive & Interactive Trusted Content`} />
<FeaturesComponent img={AwardIcon} text={`Award winning Faculties courses`} />
<FeaturesComponent img={RupeeIcon} text={`Affordable Fee-Structure & Payment Plan`} />
{/* <FeaturesComponent img={tick} text={`Comprehensive & Interactive Trusted Content`} /> */}
<FeaturesComponent img={VideoIcon} text={`Easy to understand HD video lectures`} />
</div>


<div className='px-4 md:px-36 py-14 flex flex-col gap-4 justify-between items-center'>
    <div className='flex justify-between w-full md:flex-row flex-col'>
        <h2 className='text-3xl font-semibold font-serif'>Top Catagories</h2>
        <button className='flex gap-1 items-center'>
            <span
            className='cursor-pointer'
            onClick={()=>{
                history.push('/catagories')
                window.scroll(0,0)
            }}
            >
                Browse All
            </span>
            <img src={ArrowRight} className="h-5" alt=""/>
            </button>
    </div>

<div className='mt-20 flex flex-col md:flex-row gap-3 justify-start md:justify-center'>
    {CourseCatagoryList().map((catagory,index) =>{

        {/* 
    // @ts-ignore */}
return <CatagoryComponent key={index} img={CourseIcon} catagory={catagory} count={(index+10)*8%3} />
    
} 
    )}
{/* <CatagoryComponent img={tick} catagory={`Graphic Design`} count={23} />
<CatagoryComponent img={tick} catagory={`Digital Marketing`} count={46} />
<CatagoryComponent img={tick} catagory={`Photography`} count={35} />
<CatagoryComponent img={tick} catagory={`Bussiness`} count={30} /> */}
{/* <CatagoryComponent img={tick} catagory={`Finance & Accounting`} count={10} /> */}
    </div>
</div>

<div className='bg-white px-4 md:px-36 pt-14 flex flex-col gap-4 justify-between items-center'>
    <div className='flex justify-between w-full flex-col md:flex-row'>
        <h2 className='text-3xl font-semibold font-serif'>Top Instructors</h2>
        <button className='hidden gap-1 items-center'>
            <span title='not working'>
                Browse All
            </span>
            <img src={ArrowRight} className="h-5" alt=""/>
            </button>
    </div>

    <div className='flex flex-col md:flex-row gap-4 mt-20 justify-start items-center md:justify-start'>
{InstructorList().map((instructor,index)=>{
    return(
        <InstructorCard key={instructor} img={instructorImg[index]} name={instructor} students={index*5} reviews={index+2}  />
    )
})}
         {/* <InstructorCard img={tick} name={`Jayson Roy`} students={120} reviews={30}  />
         <InstructorCard img={tick} name={`Jayson Roy`} students={120} reviews={30}  />
         <InstructorCard img={tick} name={`Jayson Roy`} students={120} reviews={30}  /> */}
    </div>
</div>
</>
    )
}

export default Home;



