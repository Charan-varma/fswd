import React from 'react'

function CourseDetails({course}) {
   return (
    <>
        <h2>Title : {course.title}</h2>
        <h3>Fee : {course.fee}</h3>
        <h3>After Discount : {course.fee - (course.fee * course.disrate / 100)}</h3>
        <hr />
    </>
   )
}

export default function CourseList() {

  let courses = [{title : "Python", fee : 10000, disrate : 10},
                 {title : "AWS", fee : 5000, disrate : 0},
                 {title : "Java EE + Hibernate + Spring", fee : 20000, disrate : 20},
                ]  
  return (
    <>
      <h1>Courses</h1>
      {
        courses.map( c => <CourseDetails course = {c} />)
      }    
    </>
  )
}
