// Object de-structuring 

const course = {
    coursename: "JS in Hindi",
    price: "2000",
    courseInstructor: "Shehzad"
}


// console.log(course.courseInsrtructor)
const {courseInstructor} = course
const {courseInstructor: instructor} = course
console.log("🚀 ~ courseInsrtructor:", courseInstructor)
console.log("🚀 ~ instructor:", instructor)

/* De-structuring example of react
const navbar = ({campany}) => {}
navbar(campany = "Abdullah")
*/

/*
Json Talk 

{
    "name": "Abdullah",
    "courseName": "JS Hindi",
    "price": "free"
}

[
    {
        "id": 1,
        "name": "Ahmed"
    },
    {
        "id": 1,
        "name": "Ahmed"
    }
]

*/