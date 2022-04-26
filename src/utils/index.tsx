
import _items from "../constants/courses"

export const CourseFinder = (title='',rating=0.0,instructor='',catagory='') : string[] => {
    const resp = _items.filter(item => {
        return item.title.toLowerCase().includes(title.toLowerCase()) &&
        item.rating >= rating &&
        item.instructor.toLowerCase().includes(instructor.toLowerCase()) &&
        item.catagory.toLowerCase().includes(catagory.toLowerCase())
    });
      {/* 
    // @ts-ignore */}
    if(resp.length > 0) return resp;
    else return [];
}

export const CourseCatagoryList = (catagory='') => {
    return [... new Set(_items.map(item => {
    if(item.catagory.toLowerCase().includes(catagory.toLowerCase()))
    return item.catagory
    }
    )
    )]
}

export const InstructorList = (instructor='') => {
    return [... new Set(_items.map(item => {
    if(item.instructor.toLowerCase().includes(instructor.toLowerCase()))
    return item.instructor
    }
    )
    )]
}
