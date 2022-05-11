

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



document.body.appendChild(svg1)