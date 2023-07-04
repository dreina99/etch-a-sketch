containerDiv = document.querySelector('.container')
clearBtn = document.querySelector('.clear')
blkCheck = document.querySelector('#black')
rnbwCheck = document.querySelector('#random')

let fillColor = "#000"

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

squares = document.querySelectorAll('.square')
squares.forEach(square => {
    square.addEventListener('mousemove', changeColor)
})

function removeColor () {
    squares.forEach(square => {
        square.style.backgroundColor = "#FFF"
    })
}

blkCheck.addEventListener('change', function() {
    if(this.checked) {
        fillColor = "#000"
    }
})

clearBtn.addEventListener('click', removeColor)


