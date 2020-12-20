// Example 1
const isEqual = (arrayA, arrayB) =>  JSON.stringify(arrayA) === JSON.stringify(arrayB)

//Example 2
const convertToArray = array => array.flat(Infinity)

// Example 3
const chunkArray = (array, chunk) => {
  const newArray = []
  let i = 0

  while (i < array.length){
      newArr.push(array.slice(i, i + chunk))

      i += chunk
  }

  return newArray
}

// Example 4
const intersection = (...arrays) => {
  if (!arrays.length) {
    return []
  }

  if (arrays.length === 1) {
    return arrays[0]
  }

  const [array1, array2] = arrays

  let result = []

  array1.forEach(item1 => {
    array2.forEach(item2 => {
      if (item2 === item1) {
        result.push(item1)
        arrays.splice(0, 2)
        const items = intersection(result, ...arrays)
        result = [...result]
      }
    })
  })

  return result
}

// Example 5
const compareDates = date => {
  const setDate = new Date(2020, 10, 30, 12, 30, 32)
  if(!date) {
    return 'data false'
  }

  if (Date.parse(setDate) > Date.parse(date)) {
    return 'before'
  }
  else if (Date.parse(setDate) < Date.parse(date)) {
    return 'after'
  }
  else {
    return 'equal'
  }
}

// Example 6
const validateEmail = email => {
  const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  return (regex.test(email))
}

// Example 7
const validateUserName = userName => {
  const regex = /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/
  return (regex.test(userName))
}
