const divGrid = document.querySelector('.container')

let opacity = 5

for(let i=0 ; i<20 ;i++){
  const div = document.createElement('div')
  divGrid.appendChild(div)
}

divGrid.addEventListener('mouseover',e => changeColor(e) )

function changeColor(e){
  e.target.style.backgroundColor = color()
}

function random(){
  const random = Math.floor(Math.random() * 255 )
  console.log(random)
  return random
}

function color(){
  opacity += 5
  if (opacity == 100){
    opacity = 5
  }
  return `rgba(${random()},111,112,${opacity}%)`
}