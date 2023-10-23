const percentage = document.getElementsByTagName('a')
const progressBar = document.getElementsByClassName('begin-width')
Array.from(percentage).forEach(element => {
    element.addEventListener('click', updateProgress)
});

function updateProgress(event){
    event.preventDefault()
    const progressBar = document.getElementById(event.target.parentNode.classList.value)
    console.log(progressBar)
    progressBar.style.width = event.target.innerText
}
