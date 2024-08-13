const rows = document.querySelector('.row')
const start = document.querySelector('.start')
const creations = document.querySelectorAll('.circle')
start.addEventListener('click', lighten)
function lighten(){
  creations.forEach(circle => {
    circle.classList.add('active')
  })
}
const input = document.querySelector('.input')
rows.addEventListener('click', () => {
  input.classList.toggle('active')
  input.focus()
  if(e.key === 'Enter'){
      console.log(input.value)
  }
})