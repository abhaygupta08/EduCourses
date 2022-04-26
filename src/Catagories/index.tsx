import { useHistory } from 'react-router-dom';
import {CourseCatagoryList} from '../utils';

const Catagories = () => {
    const history = useHistory();

    return (
        <div className="bg-white px-4 md:px-36 py-14">
            <h1 className='text-3xl font-bold mb-14 font-roboto'>Catagories</h1>
            <div className='flex gap-4 flex-col md:flex-row'>

            {CourseCatagoryList().map((catagory, index) => 
            <div key={index} className='cursor-pointer text-blue-600 border border-blue-600 px-4 py-1 rounded whitespace-nowrap'
            onClick={() =>
                history.push(`/search?title=&rating=0.0&instructor=&catagory=${catagory}`)
            }
            >{catagory}</div>    
            )}
            </div>
        </div>
    )
}
export default Catagories;