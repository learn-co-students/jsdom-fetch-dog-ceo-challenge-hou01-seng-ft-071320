console.log('%c HI', 'color: firebrick')

let allbreeds=[];

function logimg(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res=>res.json())
    .then(json=>displayimg(json))

function displayimg(dogs){
  console.log(dogs)
  // const list = document.querySelector('#dog-image-container')
  // dogs.message.forEach(dog=>{
  //   h=document.createElement("img")
  //   h.src=dog
  //   list.appendChild(h)
  // })
}
}

function fatchbreed(){
  fetch('https://dog.ceo/api/breeds/list/all')
      .then(res=>res.json())
      .then(breeds=> {
        console.log({api: breeds})
        const breedNames = Object.keys(breeds.message)
        console.log({breedNames})
        displaybreed(breedNames)
      })
}

function displaybreed(breeds){
  console.log({breeds})
  const list = document.getElementById('dog-breeds')
  list.innerText=''
  breeds.forEach(key => {
      allbreeds.push(key)
      h=document.createElement("li")
      h.innerText=key
      list.appendChild(h);
      h.addEventListener('click', changecolor);
  })
}

function selectDog(e){
  const key = e.target.value
  newBreedsnames=[]
  allbreeds.forEach((breed)=>{if(breed[0]===key){
    newBreedsnames.push(breed)
  }})
  displaybreed(newBreedsnames)
}

function changecolor(e){
    e.target.style.color = 'blue' 
}



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('breed-dropdown')
        .addEventListener("change", (e) => selectDog(e))

  logimg();
  fatchbreed();
})