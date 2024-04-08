const courses = {
    coursenames : "JavaScript,MERN Stack,DevOps,System Design,DSA",
    price : "6200",
    courseinstructor : "Harkirat"
}

//const {courseinstructor} = courses;  //De-Structurning

const {courseinstructor : instructor} = courses; 
console.log(instructor);