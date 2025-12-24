const divGrid = document.querySelector('.container')
const userInput = document.querySelector('input')
const btn = document.querySelector('.enter')

btn.addEventListener('click',makeGrid)

let opacity = 5
let rows=5, colums = 6

for(let i=0 ; i < rows*colums ;i++){
  const div = document.createElement('div')
  divGrid.appendChild(div)
}

divGrid.addEventListener('mouseover',e => changeColor(e) )

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
  for(let i=0 ; i < rows*colums ;i++){
    divGrid.firstChild.remove()
  }
  let string = ''
  string = userInput.value.split('x')
  rows = Number(string[0])
  colums = Number(string[1])
  if((isNaN(rows) && isNaN(colums)) || rows==0 || rows>100 || colums==0 || colums>100 ){
    alert('Enter a valid number in range from 1 to 100')
  }
  else{
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