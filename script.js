const divGrid = document.querySelector('.container')
const userInput = document.querySelector('input')
const btn = document.querySelector('.enter')
const soundEffect = new Audio('./sounds/water-drip.mp3')

btn.addEventListener('click',makeGrid)
userInput.addEventListener('keypress', e =>{
  if (e.key === 'Enter'){
    makeGrid()
  }
})

let opacity = 5
let rows=5, colums = 6

for(let i=0 ; i < rows*colums ;i++){
  const div = document.createElement('div')
  divGrid.appendChild(div)
}

divGrid.addEventListener('mouseover',e => {
  changeColor(e)
  soundEffect.play()
  soundEffect.currentTime = 0
})

function changeColor(e){
  e.target.style.backgroundColor = color()
}

function random(){
  const random = Math.floor(Math.random() * 255 )
  return random
}

function color(){
  opacity += 5
  if (opacity == 100){
    opacity = 5
  }
  return `rgba(${random()},111,112,${opacity}%)`
}

function makeGrid(){
  
  let string = ''
  string = userInput.value.toLowerCase()
  string = string.split('x') // now string[0] holds rows and string[1] holds columns

  if((isNaN(string[0]) && isNaN(string[1])) || string[0]==0 || string[0]>100 || string[1]==0 || string[1]>100 ){
    alert('Enter a valid number in range from 1 to 100')
  }
  else{
    for(let i=0 ; i < rows*colums ;i++){
      divGrid.firstChild.remove()
    }
      rows = string[0]
      colums = string[1]
    if(isNaN(colums)){
      colums = rows
    }
    for(let i=0 ; i < rows*colums ;i++){
      const div = document.createElement('div')
      div.style.width = (1000/rows).toString() + 'px'
      div.style.height = (500/colums).toString() + 'px'
      divGrid.appendChild(div)
    }
  }
}