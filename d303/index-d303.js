



import './style-components/mainstyle.scss'


const root1 = document.querySelector('#root1')
const root2 = document.querySelector('#root2')
const root3 = document.querySelector('#root3')
const root4 = document.querySelector('#root4')

const container1 = document.querySelector('.container1')
container1.style.width = '98vw'
container1.style.padding = '1rem'
container1.style.backgroundColor = '#39ACFB'
container1.style.color = 'blue'

const p1Content = 'hello from root1'
const p2Content = 'hello from root2'
const p3Content = 'hello from root3'
const p4Content = 'hello from root4'

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
paragraph(p4Content, root4)



import { select, range } from 'd3'




// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ROOT4

const r4SvgWidth = window.innerWidth
const r4SvgHeight = window.innerHeight

const r4Svg1 = select('#root4')
    .append('svg')
    .attr('width', r4SvgWidth)
    .attr('height', r4SvgHeight)

// horizontal rectangles:
r4Svg1.append('g')
    .selectAll('rect')
    .data(range(60))
    .join('rect')
    .attr('y', (d) => d * 20)
    .attr('width', (d) => r4SvgWidth)
    .attr('height', (d) => 10)
    .attr('mask', (d) => 'url(#circle-mask4)')

// vertical rectangles:
r4Svg1.append('g')
    .selectAll('rect')
    .data(range(60))
    .join('rect')
    .attr('x', (d) => d * 20)
    .attr('width', (d) => 10)
    .attr('height', (d) => r4SvgHeight)
    .attr('mask', (d) => 'url(#circle-mask4-black)')



const mask4 = r4Svg1.append('mask')
    .attr('id', 'circle-mask4')


mask4.append('rect')
    .attr('width', r4SvgWidth)
    .attr('height', r4SvgHeight)
    .attr('fill', 'black')


mask4.append('circle')
    .attr('cx', r4SvgWidth / 2)
    .attr('cy', r4SvgHeight / 2)
    .attr('r', 200)
    .attr('fill', 'white')


const mask4Black = r4Svg1.append('mask')
    .attr('id', 'circle-mask4-black')

mask4Black.append('rect')
    .attr('width', r4SvgWidth)
    .attr('height', r4SvgHeight)
    .attr('fill', 'white')

mask4Black.append('circle')
    .attr('cx', r4SvgWidth / 2)
    .attr('cy', r4SvgHeight / 2)
    .attr('r', 200)
    .attr('fill', 'black')
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
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ROOT3

const r3SvgWidth = window.innerWidth
const r3SsvgHeight = window.innerHeight

const r3Svg1 = select('#root3')
    .append('svg')
    .attr('width', r3SvgWidth)
    .attr('height', r3SsvgHeight)

r3Svg1.selectAll('rect')
    .data(range(60))
    .join('rect')
    .attr('y', (d) => d * 20)
    .attr('width', (d) => r3SvgWidth)
    .attr('height', (d) => 10)
    .attr('mask', (d) => 'url(#circle-mask3)')

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
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ###############################################
// ROOT2


console.log('d3 select: ', select)

const r2SvgWidth = window.innerWidth
const r2SsvgHeight = window.innerHeight

// const r2Svg1 = select('#root2').append('svg')
// r2Svg1.attr('width', r2SvgWidth)
// r2Svg1.attr('height', r2SsvgHeight)


const r2Svg2 = select('#root2')
    .append('svg')
    .attr('width', r2SvgWidth)
    .attr('height', r2SsvgHeight)


const r2Count = 60
const marks = []
for(let i = 0; i < r2Count; i++) {
    marks.push({
        y: i * 20,
        width: r2SvgWidth,
        height: 10,
        mask: 'url(#circle-mask2)'
    })
}
console.log(marks);

r2Svg2.selectAll('rect')
    .data(marks)
    .join('rect')
    .attr('y', (d) => (d.y))
    .attr('width', (d) => (d.width))
    .attr('height', (d) => (d.height))
    .attr('mask', (d) => (d.mask))

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
const p4Contentxxx = uuidV4()
paragraph(p4Contentxxx, uuidDiv1)
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