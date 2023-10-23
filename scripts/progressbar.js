const percentage = document.getElementsByTagName('a')
const progressBar = document.getElementsByClassName('begin-width')
Array.from(percentage).forEach(element => {
    element.addEventListener('click', updateBars)
});

function updateBars(event){
    event.preventDefault()
    const progressBar = document.getElementById(event.target.parentNode.classList.value)
    console.log(progressBar)
    progressBar.style.width = event.target.innerText
}

function resetBars(){
    Array.from(progressBar).forEach(element =>{
        element.style.width = '40%'
    })
}
