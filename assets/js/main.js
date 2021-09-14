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


const list = document.querySelector('.body__banner__wrapper--left__wrapper')
const sliderItems = document.querySelectorAll('.body__banner__wrapper--left__wrapper--item')
const dotItem = document.querySelectorAll('.body__banner__wrapper--left--slide__dot-item')
var itemWidth = 100
const sliderItemLength = sliderItems.length
let positionX = 0
let index = 0



function sliderShowPrev(){
    index--
    if(index < 0 ){
        list.style = `transform: translateX(-${(itemWidth*sliderItemLength) - itemWidth}%)`
        index = sliderItemLength - 1
        positionX = ((itemWidth*sliderItemLength) - itemWidth)
    }else{
        positionX = (positionX - itemWidth)
        list.style = `transform: translateX(-${positionX}%)`
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
        list.style = `transform: translateX(-${positionX}%)`
    }
}

function handleSlider(n){
    if(n == 1){
        sliderShowPrev()
    }else if(n == -1){
        sliderShowNext()
    }
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
    for (let i = 0; i < dotItem.length; i++) {
        dotItem[i].style.backgroundColor = 'white'
        dotItem[n].style.backgroundColor = 'red'
    }
}

function handleSlideShow(n){
    const slide = document.querySelector('.shop-mall__content__slider--wrapper--slide')
    const items = document.querySelectorAll('.shop-mall__content__slider--wrapper--item')
    console.log(slide.length);

    console.log('đã chạy vào hàm hanle');
    let Px = 0
    let index = 0

    if(n == -1){
        console.log('chạy vào -1');
        Px = Px + 100
        slide.style = `transform: translateX(-${Px}%)`

        console.log('px : ', Px);
    }

    console.log(itemsLength)

}


// cách hai ngắn hơn
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
    const items = document.querySelectorAll('.shop-mall__content__slider--wrapper--item')
    let index = slideIndex += n
    console.log(index, 'index');
    if(index >= items.length){
        slideIndex = 0
        index = 0
        console.log('lặp....');
    }
    if(index < 0){
        slideIndex = items.length - 1
        index = items.length - 1
    }
    showDivs(index);
    console.log('slideIndex ', slideIndex);
}

function showDivs(n) {
    console.log('n cuối: ', n);
    const slide = document.querySelector('.shop-mall__content__slider--wrapper--slide')

    slide.style = `transform: translateX(-${n*100}%)`
    
}

setInterval(()=>{
    plusDivs(1)
}, 2000)


