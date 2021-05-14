let button = document.getElementById("button")
let car = document.getElementById("car")




const drive = () => {
    position = "1100px"
    car.style.transform = `translate(${position})`
    car.style.transition = "2s"
    car.style.transitionTimingFunction = "ease-in-out"

}

button.addEventListener("click", ()=>{drive()})


