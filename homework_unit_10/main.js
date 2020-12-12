const validate = number => typeof(number) === 'number' && number > 0 && number < 31
// Example 1:
function showMultiplicationTable (number) {
  if (typeof number !== "number" || number < 1 || number > 10) {
    return `Data false`
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} =`, number * i)
  }
}

// Example 2:
function getEvenNumber (number) {
  if (!(validate(number))) {
    return `Data false`
  }
  for (let i = 2; i <= number; i += 2) {
    console.log(i)
  }
}

// Example 3:
function getSumNumber (number) {
  let sum = 0
  if (!(validate(number))) {
    return `Data false`
  }
  for (let i = 1; i <= number; i++) {
      sum += i
  }
  return sum
}

// Example 4:
function getFactorial (number) {
  let factorial = 1
  if (!(validate(number))) {
    return `Data false`
  }
  for (let i = 1; i <= number; i++) {
      factorial *= i
  }
  return  factorial
}

// Example 5:
function coutnEvenInArray (array) {
  let count = 0
  for (let i = 0; i <= array.length; i++) {
      if (!(array[i] % i)) {
          count++
      }
  }
  return count
}

// Example 6:
function deleteDuplicateElements (array) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i])
    }
  }
  return newArray
}

// Example 7:
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]

function mergeTheArrays (arrayStudentName, arrayStudentScore) {
  const newArray = []

  arrayStudentName.forEach(studentName => {
      arrayStudentScore.forEach(studentScore => {
          if (studentScore.id === studentName.id) {
              newArray.push(Object.assign(studentName, studentScore))
          }
      });
  });

  return newArray
}

// Example 8:
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

function showStudentRatings (students) {
  let min = students[0].score
  let max = students[0].score
  const highScore = {}
  const badScore = {}

  students.forEach(student => {
    if (max < student.score) {
      max = student.score
    }
    if (min > student.score) {
      min = student.score
    }
  })

  students.forEach(student => {
    if (student.score === max) {
      highScore.id = student.id
      highScore.name = student.name
      highScore.score = student.score
    }
    if (student.score === min) {
      badScore.id = student.id
      badScore.name = student.name
      badScore.score = student.score
    }
  })

  return {
    highScore,
    badScore
  }
}
