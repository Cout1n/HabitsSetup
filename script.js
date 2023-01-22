const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  const dayExists = nlwSetup.dayExists(today)
  
  if(dayExists){
    alert("Dia já incluso")
    return
  }

  alert("Dia adicionado!")
  nlwSetup.addDay(today)
}

function save(){
  localStorage.setItem('SetupHabits',JSON.stringify(nlwSetup.data))
}
/*
const data = {
  run: [ '24-01'] ,
  food:['21-01', '22-01', '23-01', '24-01','25-01'],
  worship:['22-01', '21-01','23-01']
}
*/
const data = JSON.parse(localStorage.getItem("SetupHabits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

