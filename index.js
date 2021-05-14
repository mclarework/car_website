let button = document.getElementById("button")
let car = document.getElementById("car")
let x = 0
let positionX = car.style.transform = `translate(${(toString(x))}px)`


// const drive = () => {
//     if (position == "0px") {
//         position = "1100px"
//         car.style.transform = `translate(${position})`
//     }else if (position == "1100px") {
//         position = "0px"
//         car.style.transform = `translate(${position})`
//     }
//     car.style.transition = "2s"
//     car.style.transitionTimingFunction = "ease-in-out"

// }

// button.addEventListener("click", ()=>{drive()})


const checkKey = (e) => {
    
    e = e || window.event;
    
    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
        // left arrow
    }
    else if (e.keyCode == '39') {
        // right arrow
        car.style.transform = `translate(${(toString(position+1))}px)`
        console.log("right")
        
    }
    
}


document.onkeydown = checkKey;