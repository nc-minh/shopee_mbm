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


