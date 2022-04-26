import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import School from '../assets/img/school.svg';
import search from '../assets/img/ui_components/search.svg';
import x from '../assets/img/ui_components/x.svg';
const Navbar: React.FC = () => {
    const history = useHistory();
    const [Active,setAcive] = useState(false);
    const [searchData,setsearchData] = useState('');
return(
<nav className="flex px-4 md:px-20 py-4 items-center justify-center md:justify-between bg-white font-roboto flex-col md:flex-row">
    <div className='flex gap-1 items-center cursor-pointer'
    onClick={() => history.push('/')}  
>
        <img src={School} alt="logo" className="h-12" />
        <h1 className='text-semibold'>
            EduCourses
        </h1>
    </div>
        <ul className='flex gap-4'>
            <li className='cursor-pointer hover:text-blue-600'
            onClick={()=> {
                history.push('/');
            }}
            >Home</li>
            <li className='cursor-pointer hover:text-blue-600'
            onClick={()=>{
                history.push(`/courses`)
            }}
            >Course</li>
            {/* <li className=''>About</li> */}
            <li className='cursor-pointer hover:text-blue-600'
            onClick={()=>{
                history.push(`/catagories`)
            }}
            >Catagories</li>
        </ul>
    <div className='flex gap-2 md:gap-6 items-center flex-col md:flex-row'>
        <div className='flex items-center justify-center gap-2'>
            <input type="text" 
                    value={searchData} onChange={(event) => {
                        setsearchData(event.target.value)
                    }} 
                                onKeyPress={
                                    (e) =>
              {                        if(e.key === 'Enter'){
                history.push(`/search?title=${searchData}&rating=0.0&instructor=&catagory=`)
                // history.push('/catagories')
                                          window.scroll(0,0)
                                            setAcive(false)
                                            setsearchData('')
                                            if (document?.activeElement) {
                                                      {/* 
    // @ts-ignore */}
                                                document?.activeElement?.blur();
                                            }
                                      }
              }                    }
              
            id="searchNavbar" className={`${Active ? 'w-60 opacity-1 border border-gray-250': 'w-0 opacity-0'}bg-gray-200 p-2 rounded-lg transition-all duration-200 ease-out`} placeholder="Search" />
            <img src={Active?x:search} alt="" className="h-6 cursor-pointer" onClick={() => {
                setAcive(!Active)
                if(!Active) document?.querySelector<HTMLInputElement>('#searchNavbar')?.focus();
            }} />
        </div>
        <div className='flex gap-2'>
            <div className='border border-blue-600 text-blue-600 rounded-3xl px-4 py-1.5 cursor-pointer' title='dummy'>Login</div>
            <div className='bg-blue-600 text-white rounded-3xl px-4 py-1.5 cursor-pointer' title='dummy'>Signup</div>
        </div>
    </div>
</nav>
)
}

export default Navbar;