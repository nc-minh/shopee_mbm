var category = 10
if(window.innerWidth < 880){
    category = 5
}
if(window.innerWidth < 580){
    category = 3
}
new Splide( '.splide', {
	perPage: category,
	rewind : true,
} ).mount();

var flashSale = 6
if(window.innerWidth < 880){
    flashSale = 4
}
if(window.innerWidth < 580){
    flashSale = 3
}
new Splide( '.splide-1', {
	perPage: flashSale,
	rewind : true,
} ).mount();

var mall = 4
if(window.innerWidth < 880){
    mall = 2
}
if(window.innerWidth < 739){
    mall = 3
}
new Splide( '.splide-2', {
	perPage: mall,
	rewind : true,
} ).mount();

var topp = 6
if(window.innerWidth < 880){
    topp = 4
}
if(window.innerWidth < 739){
    topp = 3
}
new Splide( '.splide-3', {
	perPage: topp,
	rewind : true,
} ).mount();


const slider = document.querySelector('.body__banner__wrapper--left--slide')
const list = document.querySelector('.body__banner__wrapper--left__wrapper')
const sliderItems = document.querySelectorAll('.body__banner__wrapper--left__wrapper--item')
const prevBtn = document.querySelector('.body__banner__wrapper--left--prev')
const nextBtn = document.querySelector('.body__banner__wrapper--left--next')
const dotItem = document.querySelectorAll('.body__banner__wrapper--left--slide__dot-item')

// var itemWidth = sliderItems[0].offsetWidth
var itemWidth = 100
const sliderItemLength = sliderItems.length
let positionX = 0
let index = 0

// itemWidth = ((itemWidth * sliderItemLength) / 100)

// console.log(sliderItemLength);
// console.log(itemWidth);
// console.log(positionX);




function sliderShowPrev(){
    index--
    if(index < 0 ){
        list.style = `transform: translateX(-${(itemWidth*sliderItemLength) - itemWidth}%)`
        index = sliderItemLength - 1
        positionX = ((itemWidth*sliderItemLength) - itemWidth)
        // console.log('trong if');
    }else{
        // console.log('index', index);
        positionX = (positionX - itemWidth)
        list.style = `transform: translateX(-${positionX}%)`
        // console.log(positionX);
        // console.log('next');
        // console.log('trong else');
    }
}

function sliderShowNext(){
    index++
    // console.log(index);
    if(index >= sliderItemLength){
        list.style = `transform: translateX(${0}%)`
        index = 0
        positionX = 0
    }else{
        positionX = positionX + itemWidth
        // console.log(itemWidth);
        list.style = `transform: translateX(-${positionX}%)`
        // console.log(positionX);
        // console.log('next');
    }
    
    
}

function handleSlider(n){
    if(n == 1){
        sliderShowPrev()
    }else if(n == -1){
        sliderShowNext()
    }

    // console.log('check index', index);
    for (let i = 0; i < dotItem.length; i++) {
        dotItem[i].style.backgroundColor = 'white'
        dotItem[index].style.backgroundColor = 'red'
    }
}

setInterval(()=>{
    handleSlider(-1)
}, 2000)

function dotNext(n){
    list.style = `transform: translateX(-${n*100}%)`
}



