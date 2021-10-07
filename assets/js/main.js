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


// cách hai ngắn hơn
var slideIndex0 = 0;
showDivsSlide(slideIndex0);

function plusDivsSlide(n) {
    const sliderItems = document.querySelectorAll('.body__banner__wrapper--left__wrapper--item')
    let index = slideIndex0 += n
    console.log(index, 'index');
    if(index >= sliderItems.length){
        slideIndex0 = 0
        index = 0
        console.log('lặp....');
    }
    if(index < 0){
        slideIndex0 = sliderItems.length - 1
        index = sliderItems.length - 1
    }
    showDivsSlide(index);
    console.log('slideIndex0 ', slideIndex0);
}

function showDivsSlide(n) {
    console.log('n cuối: ', n);
    const slide0 = document.querySelector('.body__banner__wrapper--left__wrapper')
    const sliderItems = document.querySelectorAll('.body__banner__wrapper--left--slide__dot-item')
    
    slide0.style = `transform: translateX(-${n*100}%)`

    
    sliderItems.forEach(element => {
        element.style.backgroundColor = '#ccc'
    })
    sliderItems[n].style.backgroundColor = "#f53d2d";
}

function dotNext(n){
    showDivsSlide(n)
}

setInterval(()=>{
    plusDivsSlide(1)
}, 2000)


// cách hai ngắn hơn
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
    const items = document.querySelectorAll('.shop-mall__content__slider--wrapper--item')
    let index = slideIndex += n
    if(index >= items.length){
        slideIndex = 0
        index = 0
    }
    if(index < 0){
        slideIndex = items.length - 1
        index = items.length - 1
    }
    showDivs(index);
}

function showDivs(n) {
    const slide = document.querySelector('.shop-mall__content__slider--wrapper--slide')
    slide.style = `transform: translateX(-${n*100}%)`
    
}

setInterval(()=>{
    plusDivs(1)
}, 2000)


