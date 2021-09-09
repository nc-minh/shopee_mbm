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

