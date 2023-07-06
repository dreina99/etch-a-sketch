containerDiv = document.querySelector('.container')
clearBtn = document.querySelector('.clear')
blkCheck = document.querySelector('#black')
rnbwCheck = document.querySelector('#random')
slider = document.querySelector('#myRange')
sliderLabel = document.querySelector('#sliderLabel')

let fillColor = "#000"

/* Draw initial 50 x 50 grid */
let drawGrid = (dim) => {
    for(let i = 0; i < dim; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        containerDiv.appendChild(row)
        for (let j = 0; j < dim; j++) {
            let square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
        }
    }
}
drawGrid(50)

function changeColor(e) {
    if(rnbwCheck.checked) {
        fillColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
    e.target.style.backgroundColor = fillColor
}

function removeColor () {
    squares.forEach(square => {
        square.style.backgroundColor = "#FFF"
    })
}

blkCheck.addEventListener('change', function() {
    removeColor()
    rnbwCheck.checked = false
    if(this.checked) {
        fillColor = "#000"
    }
})

rnbwCheck.addEventListener('change', function() {
    removeColor()
    blkCheck.checked = false
})

clearBtn.addEventListener('click', removeColor)

/* Slider Functions */
slider.addEventListener('change', () => {
    sliderLabel.textContent = slider.value + 'x' + slider.value
    containerDiv.innerHTML = ""
    drawGrid(slider.value)

    squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.addEventListener('mousemove', changeColor)
    })
})

squares = document.querySelectorAll('.square')
squares.forEach(square => {
    square.addEventListener('mousemove', changeColor)
})

