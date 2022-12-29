const score = document.querySelector('.score')
const bestScore = document.querySelector('.score-best')
const tiles = document.querySelectorAll('.tile')

const newGame = document.querySelector('.new-game')

const toLeft = [
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
]
const toUp = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
]
const toRight = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
]
const toDown = [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

function changeStyles() {
    const innerTiles = document.querySelectorAll('.tile-inner')

    innerTiles.forEach(tile => {
        if (+tile.textContent <= 64) {
            tile.style.fontSize = '36px'
        }   else if (+tile.textContent === 128) {
            tile.style.fontSize = '30px'
        }

        changeBackground(tile, 2048, '724BE1')
        changeBackground(tile, 1024, '604BE1')
        changeBackground(tile, 512, '4E4BE1')
        changeBackground(tile, 256, '4B51E1')
        changeBackground(tile, 128, '4B63E1')
        changeBackground(tile, 64, '4B90E1')
        changeBackground(tile, 32, '4BABE1')
        changeBackground(tile, 16, '4BBDE1')
        changeBackground(tile, 8, '4BD8E1')
        changeBackground(tile, 4, '4BE1BD')
        changeBackground(tile, 2, '4BE16C')
    })

    function changeBackground(tile, value, string) {
        if (+tile.textContent === value) {
            tile.style.backgroundColor = `#${string}`;
        }
    }
}

function createTile() {
    const numbers = [2, 4]

    const tile = document.createElement('div')
    tile.classList.add('tile-inner')
    tile.textContent = `${numbers[randomNumber(1, 0, 0.7)]}`

    return tile
}

function randomNumber(max, min, probability = 0.5) {
    const random = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(random)
}

function spawnTile() {
    const lastTiles = []

    for (let i = 0; i < tiles.length; i++) {
        
        if (i >= 12) {
            lastTiles.push(tiles[i])
        }
    }

    lastTiles[randomNumber(3, 0)].append(createTile())
}
spawnTile()

function countTiles() {
    const tiles = document.querySelectorAll('.tile')

    tiles.forEach(tile => {
        if (tile.children.length > 1) {
            // some code
            console.log(tile)
        }
    })
}
countTiles()

document.addEventListener('keydown', pressKey)

function pressKey(e) {

    keyValidation('arrowleft')
    keyValidation('arrowup')
    keyValidation('arrowright')
    keyValidation('arrowdown')

    function keyValidation(key) {
        if (e.key.toLowerCase() === `${key}`) {
            const newArray = []

            if (key.substring(5) === 'left') {
                toLeft.forEach(array => {
                    newArray.push(...array)
                })
            }   else if (key.substring(5) === 'up') {
                toUp.forEach(array => {
                    newArray.push(...array)
                })
            }   else if (key.substring(5) === 'right') {
                toRight.forEach(array => {
                    newArray.push(...array)
                })
            }   else if (key.substring(5) === 'down') {
                toDown.forEach(array => {
                    newArray.push(...array)
                })
            }

            function spawningTile(array) {
                const correctTile = []

                for (let i = 0; i < array.length; i++) {
                    if (array[i] === 1) {
                        correctTile.push(i)
                    }
                }

                tiles.forEach(tile => {
                    while (tile.firstChild) {
                        tile.removeChild(tile.firstChild)
                    }
                })

                console.log(correctTile)
                console.log(tiles[correctTile[randomNumber(3, 0)]].removeChild)
                tiles[correctTile[randomNumber(3, 0)]].append(createTile())
            }
            spawningTile(newArray)

            changeStyles()
        }
    }
}

changeStyles()