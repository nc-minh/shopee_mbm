function arrowCategoryLeft(){
    const list = document.querySelector('.body__category__content__wrapper__list')
    const left = document.querySelector('.body__category__content__btn-left')
    const right = document.querySelector('.body__category__content__btn-right')
    const widthFrame = document.querySelector('.body__category__content')
    // left.style.display = "none"
    // right.style.display = "flex"
    list.style.transform = "translate(0px, 0px)";
    var n = list.clientWidth
    var m = widthFrame.clientWidth
    while(true){
        if(m < n){
            m = m + m
            console.log(m);
        }else{
            break
        }
    }
}

function arrowCategoryRight(){
    const list = document.querySelector('.body__category__content__wrapper__list')
    const right = document.querySelector('.body__category__content__btn-right')
    const left = document.querySelector('.body__category__content__btn-left')
    const widthFrame = document.querySelector('.body__category__content')
    // right.style.display = "none"
    // left.style.display = "flex"
    list.style.transform = "translate(-360px, 0px)"
    var n = list.clientWidth
    var m = widthFrame.clientWidth
    var i = 0
    console.log(i);
    i = i + 1
    console.log(i);
    // console.log(n, m);
    // console.log(Math.ceil(n/m));
    // for(i=0; i< Math.ceil(n/m); ){
    //     if(m < n){
    //         list.style.transform = `translate(-${m}px, 0px)`
    //         m = m + m
    //         i++
    //     }else if(m>=n){
    //         console.log('m cuối',m);
    //     }else{
    //         console.log(m);
    //     }
    // }
}