import React, { ReactElement, useEffect } from 'react';
import CourseCard from './CourseCard';
import _items from '../../constants/courses';

const slideWidth = 23;




// const _items = [
//     {
//         imgUrl : 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
//         title : 'Web Developement zero to hero',
//         price : '$20',
//         discountedPrice : '$15.99',
//         rating : 4.5,
//         instructor : 'John Doe',
//         catagory : 'Web Development',
//         reviewCount : '3.5k+',
//         courseId : '001',

//     },
//     {
//         imgUrl : 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23',
//         title : 'Networking for beginners',
//         price : '$10',
//         discountedPrice : '$7.99',
//         rating : 3.5,
//         instructor : 'Obama John',
//         catagory : 'Networking',
//         reviewCount : '5.5k+',
//         courseId : '002',
//     },
//     {
//         imgUrl : 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa',
//         title : 'Communication for beginners',
//         price : '$12',
//         discountedPrice : '$9.99',
//         rating : 2.3,
//         instructor : 'Abhay Gupta',
//         catagory : 'Communication',
//         reviewCount : '5.5k+',
//         courseId : '003',
//     },
//     {
//         imgUrl : 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
//         title : 'Computer Science for beginners',
//         price : '$10',
//         discountedPrice : '$7.99',
//         rating : 3.5,
//         instructor : 'Fahad Khan',
//         catagory : 'Gate',
//         reviewCount : '5.5k+',
//         courseId : '004',
//     },
// ]


const length = _items.length;
// _items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position : number, idx : number) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        data: _items[idx],
    };

    switch (position) {
        case length - 1:
        case length + 1:
            // item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            // item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

interface CarouselSlideItemProps {
    pos : number,
    idx : number,
    activeIdx : number,
}
const CarouselSlideItem = ({pos, idx} : CarouselSlideItemProps) : ReactElement => {
    const item = createItem(pos, idx);

    return (
        <li className="carousel__slide-item md:p-4" style={item.styles}>
            {/* {console.log(item.data)} */}
            <CourseCard key={item.data.courseId} item={item.data} />
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel: React.FC = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;


    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const automate = () =>{
        setInterval(() => {
            if(activeIdx == _items.length - 1){
                setActiveIdx(0);
            }else{
            nextClick();
            }
            }, 10000);
    }
    useEffect(() => {
        
        automate();
        
    }, []);
    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx : number) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                {/* <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button> */}
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                {/* <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button> */}
                <div className="carousel__dots w-full flex justify-center">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};



export default Carousel;