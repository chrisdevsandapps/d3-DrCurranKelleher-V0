



const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

svg1.setAttribute('width', 960)
svg1.setAttribute('height', 500)


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
rect2.setAttribute('width', 10)
rect2.setAttribute('height', 500)
rect2.setAttribute('x', 10)
rect2.setAttribute('fill', 'none')
rect2.setAttribute('stroke', 'red')
rect2.setAttribute('stroke-width', 3)
svg1.appendChild(rect2)


console.log('svg1: ', svg1);

document.querySelector('.div1').appendChild(svg1)


// document.body.appendChild(svg1)