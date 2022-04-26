import { useHistory } from 'react-router-dom';
import HeroImg from '../../assets/img/hero.png';
import { useState,Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import {CourseCatagoryList} from '../../utils'

const people = CourseCatagoryList().map((item,idx) => ({
    id : idx,
    name : item
})
)

// const people = [
//     { id: 1, name: 'Wade Cooper' },
//     { id: 2, name: 'Arlene Mccoy' },
//     { id: 3, name: 'Devon Webb' },
//     { id: 4, name: 'Tom Cook' },
//     { id: 5, name: 'Tanya Fox' },
//     { id: 6, name: 'Hellen Schmidt' },
//   ]

  
const Hero: React.FC = () => {

    const [selected, setSelected] = useState({
        id : 0,
        name : 'Catagory',
    })

    const [query, setQuery] = useState('')
  
    const filteredPeople =
      query === ''
        ? people
        : people.filter((person) =>
        // @ts-ignore
            person.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          )
  

    const history = useHistory();
    const [searchData,setsearchData] = useState('');
    return(
        <div className="flex flex-col md:flex-row justify-center items-end md:h-screen px-4 md:px-16">
            <div 
            className="md:max-w-1/2 flex flex-col gap-4 justify-end py-16">
                <h1 className="text-3xl md:text-5xl text-center font-bold">
                    You can learn better when <span className="text-blue-600">we are together</span>
                </h1>
                <p className="text-center mt-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quibusdam similique id perferendis? Officia error ipsum accusantium odit corporis? Quam unde laborum atque alias amet illum asperiores repellat nesciunt ipsa!
                </p>
                <div className='bg-white border border-gray-150 flex pl-1 items-center justify-between rounded-lg mt-8'>
                    <input 
                    className='w-full px-2 md:px-5 h-10'
                    onKeyPress={
                      (e) =>
{                        if(e.key === 'Enter'){
  history.push(`/search?title=${searchData}&rating=0.0&instructor=&catagory=${selected.name === 'Catagory'?'':selected.name}`)
  // history.push('/catagories')
                            window.scroll(0,0)
                        }
}                    }
                    value={searchData} onChange={(event) => {
                        setsearchData(event.target.value)
                    }} 
                    placeholder='what do you want ot learn ?'/>
                    <div className='flex gap-0 items-center'>
                    
                    
                    
                    {/* <div className='px-3 py-3 '>Catagory</div> */}
      <Combobox value={selected} onChange={setSelected}>
        <div className="hidden md:block w-44 relative mt-1 rounded-lg" 
        // onClick={()=> {
        //   if(selected.id === 0)setSelected({
        //     id : 0,
        //     name : '',
        // })
        // }}
        >
          <div className="relative w-full text-left bg-white border-l border-gray-450 -mt-1 py-px cursor-default focus:outline-none sm:text-sm overflow-hidden">
            <Combobox.Input
              className="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
// @ts-ignore
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 ${
                        active ? 'text-white bg-blue-600' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

                    
                    
                    
                    
                    <button className='text-white rounded bg-blue-700 px-4 py-2'
                    onClick={() => {
                        history.push(`/search?title=${searchData}&rating=0.0&instructor=&catagory=${selected.name === 'Catagory'?'':selected.name}`)
                        window.scroll(0,0)
                    }}
                    >Search</button>
                    </div>

                </div>
                
                <Combobox value={selected} onChange={setSelected}>
        <div className="block md:hidden relative mt-1 rounded-lg" 
        // onClick={()=> {
        //   if(selected.id === 0)setSelected({
        //     id : 0,
        //     name : '',
        // })
        // }}
        >
          <div className="relative w-full text-left bg-white -mt-1 py-px cursor-default focus:outline-none sm:text-sm overflow-hidden">
            <Combobox.Input
              className="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"

              // @ts-ignore
displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 ${
                        active ? 'text-white bg-blue-600' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

               

<div className='flex justify-center md:justify-start'>

                <button className="bg-blue-700 py-2.5 px-6 mt-4 w-min whitespace-nowrap rounded-3xl text-white"
                onClick={() => {
                  history.push('/courses')
                  window.scroll(0,0)
                }
              }
              >Explore all Courses</button>
              </div>
            </div>
                <img src={HeroImg} className='h-full' />
        </div>
    )
} 

export default Hero;