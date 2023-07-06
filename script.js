containerDiv = document.querySelector('.container')
clearBtn = document.querySelector('.clear')
blkCheck = document.querySelector('#black')
rnbwCheck = document.querySelector('#random')
eraserCheck = document.querySelector('#eraser')
colorPicker = document.querySelector('#colorPicker')
slider = document.querySelector('#myRange')
sliderLabel = document.querySelector('#sliderLabel')

let fillColor = "#000"
let prevColor = "#000"

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


/* Helper functions for color change */
function changeColor(e) {
    if(rnbwCheck.checked) {
        fillColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    } else if (blkCheck.checked) {
        fillColor = "#000"
    } else if (eraserCheck.checked) {
        fillColor = "#FFF"
    }
    e.target.style.backgroundColor = fillColor
}

function removeColor () {
    squares.forEach(square => {
        square.style.backgroundColor = "#FFF"
    })
}


/* Checkbox event listeners */
blkCheck.addEventListener('change', () => {
    rnbwCheck.checked = false
    eraserCheck.checked = false
})

rnbwCheck.addEventListener('change', () => {
    blkCheck.checked = false
    eraserCheck.checked = false
})

eraserCheck.addEventListener('change', () => {
    blkCheck.checked = false
    rnbwCheck.checked = false

    if(eraserCheck.checked == true)
        prevColor = fillColor
    else if(eraserCheck.checked == false)
        fillColor = prevColor
})

let colorPickerFunc = () => {
    blkCheck.checked = false
    rnbwCheck.checked = false
    eraserCheck.checked = false

    fillColor = colorPicker.value
}

colorPicker.addEventListener('input', colorPickerFunc)
colorPicker.addEventListener('click', colorPickerFunc)


clearBtn.addEventListener('click', () => {
    removeColor()
    // if eraser checked on clear, set color to black
    if (eraserCheck.checked == true) {
        eraserCheck.checked = false
        blkCheck.checked = true
        fillColor = "#000"
    }
})


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


/* Updating square colors */
squares = document.querySelectorAll('.square')
squares.forEach(square => {
    square.addEventListener('mousemove', changeColor)
})

