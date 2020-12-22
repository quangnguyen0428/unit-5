// Example 1
const showTime = () => console.log(new Date())

// Example 2
const validateUserName = value => {
  const regex = /^[a-zA-z](?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/

  return regex.test(value) ? undefined : alert('nhập sai vui lòng nhập lại')
}


//Example 3
const validateMoney = value => {
  const money = Number.parseInt(value)
  if (value < 0 || value > 1000) {
      alert('Vui lòng nhập số tiền khoảng từ 0 ---> 1000')
  }
}

// Example 4
const isDoubleClick = () => alert('Double click')

// Example 5
const selectText = () => {
  let text = "";
  text = window.getSelection()
  console.log(text.toString())
}

// Example 6
const selectFluits = event => {
  console.log(event.target.options[event.target.selectedIndex].text)
}

document.querySelector('.fluits').addEventListener('change', selectFluits);



