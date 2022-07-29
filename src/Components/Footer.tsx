import logo from '../assets/img/school.svg';
const Footer = () => {
    return(<>
            <div className="relative bg-white md:h-72 flex justify-center items-end px-4 md:px-0 py-14 md:py-0">
                <div className="md:absolute bg-white text-black rounded-lg py-6 px-4 md:px-8 border border-gray-250 shadow-md md:top-full md:left-1/2 notify-section"
                style={{
                    // top: '100%',
                    // left: '50%',
                    // transform: 'translate(-50%, -50%)'
                }}
                >
                    <h3 className="text-xl text-blue-600 font-roboto">Subscribe to Get Notify</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati iste cum rem non assumenda doloribus, tempore architecto quo laboriosam totam voluptatem voluptatibus dicta at placeat autem ab quae perferendis?</p>
                    <form className="flex flex-row my-6 w-full px-4 md:px-14">
                        <input type='text' className="text-sm border border-blue-600 px-2 py-1.5 rounded-l w-full" placeholder="Your Email" />
                        <button className="px-2 py-1.5 rounded-r bg-blue-600 tracking-wideer text-sm text-white">SUBSCRIBE </button>
                    </form>
                </div>
            </div>
            <div className="bg-gray-850 px-4 md:px-36 md:h-96 md:pt-32 text-white flex flex-col md:flex-row gap-8 md:gap-0">
                <div className='flex flex-col gap-2 md:w-96 items-center md:items-start text-center md:text-left'>
                    <div className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className="h-14" style={{filter: 'invert(90%)'}} />
                    <span className="text-xl text-white">Educourses</span>
                    </div>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia officiis in vel tempore quis voluptate vero, suscipit reprehenderit</p>
                    <div className='mt-4 md:mt-0 text-lg'>
                        C O N T A C T
                    </div>
                </div>
                <div className='w-full'>{' '}</div>
                <div className='flex gap-4 justify-around md:justify-start'>

                <div className='flex flex-col gap-1.5'>
                    <h3 className='font-semibold font-roboto'>Contacts</h3>
                    <ul className='flex flex-col gap-1 text-sm'>
                        <li>Link 1</li>
                        <li>Link 1</li>
                        <li>Link 1</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-1.5'>
                    <h3 className='font-roboto font-semibold'>Links</h3>
                    <ul className='flex flex-col gap-1 text-sm'>
                        <li>Link 1</li>
                        <li>Link 1</li>
                        <li>Link 1</li>
                    </ul>
                </div>
                </div>


                <div>

                </div>
            </div>
    </>
    )
}

export default Footer;