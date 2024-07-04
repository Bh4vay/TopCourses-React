import React from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;

    function getCourses(){
        let courseArr = [];
        Object.values(courses).forEach( (array) =>{
            array.forEach( (data) => (
                courseArr.push(data)
            ))
        } )
        return courseArr;
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) => (
                    <Card course = {course} id = {course.id}/>
                ) )
            }
        </div>
    )
}

export default Cards