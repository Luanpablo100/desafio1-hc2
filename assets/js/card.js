let offers = document.getElementsByClassName('offer')

for(offer in offers) {
    let ofert = offers[offer]
    ofert.addEventListener('mouseover', () => {
        let = ofertChildren = ofert.children
        console.log(ofertChildren)
        let addCartButton = ofertChildren[3]
        addCartButton.classList.add('active')
    })
    
    ofert.addEventListener('mouseout', () => {
        let = ofertChildren = ofert.children
        console.log(ofertChildren)
        let addCartButton = ofertChildren[3]
        addCartButton.classList.remove('active')
    })
}

