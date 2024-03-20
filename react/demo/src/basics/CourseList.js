import React from 'react'

export default function CourseList() {

  let courses = [{title : "Python", fee : 10000},
                 {title : "AWS", fee : 5000},
                 {title : "Java EE + Hibernate + Spring", fee : 20000}
                ]

  return (
    <>
        <h1>Courses</h1>
        <ul>
            {
                courses.map( c => <li>{c.title} - {c.fee}</li>)
            }   
        </ul>
    </>
  )
}
