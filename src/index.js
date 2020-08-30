const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener("DOMContentLoaded", () => {
    console.log('%c HI', 'color: firebrick')
    getDogs()
    getBreeds()
});



//get dogs
//parse dogs to json
//create elements
//append to dogs
//👋


const getDogs = () => {
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => {
        createDogs(dogs.message)
    })
}
const createDogs = (dogs) => {
    dogs.forEach(dog => {
        dogImg = document.createElement('img')
        dogImg.src = dog
        dogImg.height = '200'
        document.querySelector('#dog-image-container').appendChild(dogImg)
    })
}

const getBreeds = () => {
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        //console.log(breeds.message)
        createBreeds(breeds.message)
        filterBreeds(breeds.message)
    })
}


const createBreeds = (breeds) => {
    for (const breed in breeds) {
        //console.log(breed)
        postBreed(breed)
    } 
}

const postBreed = (breed) =>{
    breedItem = document.createElement('li')
        breedItem.innerText = breed
        document.querySelector('#dog-breeds').appendChild(breedItem)
        breedItem.addEventListener('click', (e) => {
            e.target.style.color = 'red'
        })
}


const filterBreeds = (breeds) => {
    dropDownSelect = document.querySelector('#breed-dropdown')
    dropDownSelect.addEventListener( 'change',() => {
        document.querySelector('#dog-breeds').innerHTML = ''
        //console.log(dropDownSelect.value)
        const letterSelection = dropDownSelect.value
        for (const breed in breeds) {
            if (breed[0] === letterSelection){
                    postBreed(breed)
            }
        } 
    })
}

