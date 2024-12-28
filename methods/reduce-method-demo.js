// Array of student grades
const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

// Calculate sum of all grades using reduce
const totalGrades = grades.reduce(function(total, currentGrade){
    return total + currentGrade
})

// Calculate and display class average
console.log(`The class average is ${totalGrades/grades.length}`)