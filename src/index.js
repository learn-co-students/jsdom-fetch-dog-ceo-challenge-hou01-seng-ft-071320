document.addEventListener("DOMContentLoaded", () => {
getImages()
getBreeds()
enableAlphabeticFilter()
})

console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const getImages = () => {
    fetch(imgUrl)
    .then(res => res.json())
    // .then(console.log)
    .then(dogs => {
        dogs.message.forEach((dog) => {
            appendDog(dog)
        })
    })
}

const appendDog = (singleDog) => {
    const dogContainer = document.querySelector("#dog-image-container")
    const dogImg = document.createElement('img')
    dogImg.src = singleDog
    dogImg.height = '300'
    dogImg.width = '225'
    dogContainer.append(dogImg)
}

const getBreeds = () => {
    fetch(breedUrl)
    .then(res => res.json())
    // .then(console.log)
    .then(breeds => {
        let breedNames = breeds.message
        for (const breed in breedNames) {
            appendBreed(breed)
        }
    })
}
    
const appendBreed = (singleBreed) => {
    const dogUl = document.querySelector('#dog-breeds')
    const breedLi = document.createElement('li')
    breedLi.innerText = singleBreed
    
    breedLi.addEventListener('click', (e) => {
        e.target.style.color = "blue"
    })
    dogUl.append(breedLi)
}
 
const enableAlphabeticFilter = () => {
    const breedDroppy = document.querySelector('#breed-dropdown')
    const dogUl = document.querySelector('#dog-breeds')

    breedDroppy.addEventListener('change', (e) => {
        e.preventDefault()
        let startingLetter = breedDroppy.value
        getFilteredBreeds(startingLetter)
        while (dogUl.firstChild) dogUl.removeChild(dogUl.firstChild)
    })
}

const getFilteredBreeds = (letter) => {
    fetch(breedUrl)
    .then(res => res.json())
    // .then(console.log)
    .then(breeds => {
        let breedNames = breeds.message
        for (const breed in breedNames) {
            appendFilteredBreed(breed, letter)
        }
    })
}

const appendFilteredBreed = (singleBreed, letter) => {
    if (singleBreed[0] === letter) {
        appendBreed(singleBreed)
    }
}