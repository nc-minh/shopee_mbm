
new Splide( '.splide', {
	perPage: 10,
	rewind : true,
} ).mount();

if(window.innerWidth < 880){
    new Splide( '.splide', {
        perPage: 5,
        rewind : true,
    } ).mount();
}

if(window.innerWidth < 580){
    new Splide( '.splide', {
        perPage: 3,
        rewind : true,
    } ).mount();
}

new Splide( '.splide-1', {
	perPage: 6,
	rewind : true,
} ).mount();