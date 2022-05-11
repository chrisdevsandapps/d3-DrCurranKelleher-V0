

const svgWidth = window.innerWidth
const svgHeight = window.innerHeight


const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

svg1.setAttribute('width', svgWidth)
svg1.setAttribute('height', svgHeight)


const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
rect1.setAttribute('width', 100)
rect1.setAttribute('height', 100)
rect1.setAttribute('x', 50)
rect1.setAttribute('y', 50)
rect1.setAttribute('fill', 'yellow')
rect1.setAttribute('stroke', 'green')
rect1.setAttribute('stroke-width', 3)
svg1.appendChild(rect1)

const rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
rect2.setAttribute('width', 20)
rect2.setAttribute('height', 300)
rect2.setAttribute('x', 10)
rect2.setAttribute('fill', '#6495ED')
rect2.setAttribute('stroke', 'red')
rect2.setAttribute('stroke-width', 3)
svg1.appendChild(rect2)



const count = 50
for (let i = 0; i < count; i++) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    rect.setAttribute('width', 10)
    rect.setAttribute('height', 500)
    rect.setAttribute('x', i * 20)
    rect.setAttribute('fill', '#DFFF00')
    rect.setAttribute('stroke', 'red')
    rect.setAttribute('stroke-width', 1)
    svg1.appendChild(rect)
}

console.log('svg1: ', svg1);



document.body.appendChild(svg1)