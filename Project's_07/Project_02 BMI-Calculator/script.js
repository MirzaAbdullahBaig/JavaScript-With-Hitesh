const form = document.querySelector('form')

// This Usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `Plz give a valid height in 'CM'`
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Plz give a valid weight in 'KG'`
    } else {
        const BMI = weight/((height*height)/10000).toFixed(2)
        if (BMI < 18.6) {
            result.innerHTML = `You are under weight, Your BMI is ${BMI}`
        } else if (BMI < 24.9) {
            result.innerHTML = `Your weight is Normal, Your BMI is ${BMI}`
        } else {
            result.innerHTML = `Your weight is Over, Your BMI is ${BMI}`
        }
    }
})