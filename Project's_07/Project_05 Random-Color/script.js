// Generate Random Color

const randomColor = () => {
    const hex = "0123456789abcdef"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]        
    }
    return color
}
console.log(randomColor());

document.querySelector('div').addEventListener('click', (e) => {
    if (e.target.id === 'start') {
        
    }
})