function numbers() {
  const numbA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const numbB = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const sections = ['lift1', 'lift2']
  //display text variables
  const display = document.getElementById('footer')
  const texts = [
    'Please choose the floor!',
    'Next floor is ',
    'Doors are closing!',
    'Now we are on floor ',
    'This is floor ', //floor template literals
    'Doors are opening!',
    'Welcome!',
  ]
  display.innerText = texts[0]
  //buttons constructor and processors

  const constr = (arr, sect) => {
    let itemVar = 0
    arr.forEach((num) => {
      const NewEl = document.createElement('div')
      const att = document.createAttribute('class')
      att.value = 'square'
      NewEl.setAttributeNode(att)
      NewEl.style.width = '100px'
      NewEl.style.height = '100px'
      NewEl.style.backgroundColor = 'grey'
      NewEl.style.borderRadius = '9px'
      NewEl.style.margin = '1px'
      NewEl.innerText = num
      NewEl.addEventListener('click', btnHandler)

      //appendChild
      const mainEl = document.getElementById(`${sect}`)
      mainEl.appendChild(NewEl)
      //functions related to data processing
      function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
      }
      const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds))
      }
      //actions
      async function btnHandler() {
        display.innerText = `${sect}-${texts[1]}${num}`
        await wait(2000)
        display.innerText = `${sect}-${texts[2]}`
        await wait(3000)
        //time related current floor, we are on floor...
        display.innerText = `${sect}-${texts[3]}`
        const list = []

        for (let i = 1; i <= num; i++) list.push(i)

        const doSomething = async () => {
          for (const item of list) {
            itemVar = item
            await sleep(1000)
            display.innerText = `${sect}-${texts[3]}${item}`
          }
          display.innerText = `${sect}-${texts[4]}${num}`
          await wait(2000)
          display.innerText = `${sect}-${texts[5]}`
          await wait(3000)
          display.innerText = texts[6]
          await wait(2000)
          display.innerText = texts[0]
        }
        doSomething()
      }
    })
    //create emergency btns
    const emg = document.createElement('div')
    const emgAtr = document.createAttribute('class')
    emgAtr.value = 'square'
    emg.setAttributeNode(emgAtr)
    emg.style.width = '100px'
    emg.style.height = '100px'
    emg.style.backgroundColor = 'orange'
    emg.style.borderRadius = '9px'
    emg.style.margin = '1px'
    emg.innerText = 'STOP'

    emg.addEventListener('click', emgHandler)

    //appendChild EmgBtn
    const oneEmg = document.getElementById(`${sect}`)
    oneEmg.appendChild(emg)
    function emgHandler() {
      alert(`We urgently Stopped at floor ${itemVar}`)
      location.reload()
    }
  }

  constr(numbA, sections[0])
  constr(numbB, sections[1])
}
numbers()
