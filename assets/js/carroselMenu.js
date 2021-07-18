let imgNumber = 2;

setInterval(() => {
    document.querySelector('#carrosel img').src = `assets/img/banner${imgNumber}.png`
    imgNumber += 1
},5000)
setInterval(() => {
    imgNumber = 1
}, 11000)