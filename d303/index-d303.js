



import './style-components/mainstyle.scss'


const root1 = document.querySelector('#root1')
const root2 = document.querySelector('#root2')
const root3 = document.querySelector('#root3')

const container1 = document.querySelector('.container1')
container1.style.width = '90vw'
container1.style.padding = '1rem'
container1.style.backgroundColor = '#39ACFB'
container1.style.color = 'blue'

const p1Content = 'hello from root1'
const p2Content = 'hello from root2'
const p3Content = 'hello from root3'

function paragraph(pContent, appendTo) {
    const p1 = document.createElement('p')
    p1.textContent = pContent
    p1.style.padding = '1rem'
    p1.style.backgroundColor = 'blue'
    p1.style.color = 'yellow'
    p1.style.fontSize = '2rem'

    appendTo.appendChild(p1)
}

paragraph(p1Content, root1)
paragraph(p2Content, root2)
paragraph(p3Content, root3)





// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ROOT1
const svgWidth = window.innerWidth
const svgHeight = window.innerHeight


const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg1.setAttribute('width', svgWidth)
svg1.setAttribute('height', svgHeight)


const mask1 = document.createElementNS('http://www.w3.org/2000/svg', 'mask')
mask1.setAttribute('id', 'circle-mask')
svg1.appendChild(mask1)


const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
circle1.setAttribute('cx', svgWidth/2)
circle1.setAttribute('cy', svgHeight/2)
circle1.setAttribute('r', svgHeight/2)
circle1.setAttribute('fill', 'white')
mask1.appendChild(circle1)


const count = 60
for (let i = 0; i < count; i++) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    rect.setAttribute('width', 10)
    rect.setAttribute('height', svgHeight)
    rect.setAttribute('x', i * 20)
    rect.setAttribute('fill', '#DFFF00')
    rect.setAttribute('stroke', 'red')
    rect.setAttribute('stroke-width', 1)
    svg1.appendChild(rect)
}


for (let i = 0; i < count; i++) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    rect.setAttribute('width', svgWidth)
    rect.setAttribute('height', 10)
    rect.setAttribute('y', i * 20)
    rect.setAttribute('fill', '#DFFF00')
    rect.setAttribute('stroke', 'red')
    rect.setAttribute('stroke-width', 1)
    rect.setAttribute('mask', 'url(#circle-mask)')
    svg1.appendChild(rect)
}

console.log('svg1: ', svg1);



// document.body.appendChild(svg1)
document.querySelector('#root1').appendChild(svg1)
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################














// ###############################################
// ###############################################
// ###############################################
// loading img tag from DOM

import imageTest1 from './images/mout-apo-lake.jpg'

const img1 = document.querySelector('#imageTest1')
img1.src = imageTest1
img1.style.width = '50%'


// ###############################################
// ###############################################
// ###############################################
// loading svg via img tag from DOM

import svgFile1 from './images/mickeymouse1.svg'

const img2 = document.querySelector('#svgTest1')
img2.src = svgFile1
img2.style.width = '50%'


// ###############################################
// ###############################################
// ###############################################
// joke test
import laughingSvg from './images/laughing.svg'
const laughImg = document.getElementById('laughImg')
laughImg.src = laughingSvg

import generateJoke from "./js-components/generateJoke"
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()






// ###############################################
// ###############################################
// ###############################################
// uuid test
import { v4 as uuidV4 } from 'uuid'
const uuidDiv1 = document.querySelector('#uuidDiv1')
const p4Content = uuidV4()
paragraph(p4Content, uuidDiv1)
paragraph(uuidV4(), uuidDiv1)
paragraph(uuidV4(), uuidDiv1)




// ###############################################
// ###############################################
// ###############################################
// ES Module test
import { square } from './js-components/square'
const esModuleTest = document.querySelector('#esModuleTest')
paragraph(square(100), esModuleTest)
paragraph(square(333), esModuleTest)
paragraph(square(999), esModuleTest)






// ###############################################
// ###############################################
// ###############################################
// CommonJs module test
let squareNum = require('./js-components/commonJs-square')
const commonJsTest = document.querySelector('#commonJsTest')
paragraph(squareNum.square(100), commonJsTest)
paragraph(squareNum.square(333), commonJsTest)
paragraph(squareNum.square(999), commonJsTest)