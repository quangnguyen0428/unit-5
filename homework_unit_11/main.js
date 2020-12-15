// Example 1
// option 1
const result = []
const loopArray = (someThing, count) => {
  for (let i = 1; i <= count; i++) {
    result.push(someThing)
  }

  return result
}

//option 2
const result = []
const loopArray = (someThing, count) => {
  for (let i = 1; i <= count; i++) {
    result.splice(result.length, 0, someThing)
  }

  return result
}

//Example 2
const newArr = []
const reverseArray = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i])
  }

  return newArr
}


//Example 3
const deleteFalsyinArray = array => {
  const result = array.filter(function(value) {
    return value
  })

  return result
}

//Example 5
const sortArray = array => {
  if (!(Array.isArray(array)) || array.length < 1) {
    return `data false`
  }

  return array.sort()
}

//Example 6
const checkIsObject = value => !!value && value.constructor === Object

//Example 8
const deleteElementInArray = array => {
  if (!(Array.isArray(array)) || array.length < 5) {
    return `data false`
  }
  array.splice(1, 2)
  return array
}
