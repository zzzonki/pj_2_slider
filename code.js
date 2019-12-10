let slider = $(".slider")
let sliderLenta = slider.find(".slider-lenta")
let sliderItems = slider.find(".slider-lenta-item.real")
sliderLenta.css('width', (sliderItems.length+2) * 100 + "%")
let sliderBullets = slider.find('.slider-bullets div')

// MVC
// Model
let showIndex = 0

changeBullets(showIndex)

slider.find('.slider-arrow-left i').click(function slideLeft(){
    // Обрывает выполнение функции во время анимции
    // Таким образом нельзя мотать слишком быстро
    if(sliderLenta.hasClass("animated")){
        return
    }
    sliderLenta.addClass('animated')
    if(showIndex <= 0){
        showIndex--
        
        sliderLenta.animate({
            left: -100 * (showIndex+1)+"%"
        },1500, function(){
            showIndex = sliderItems.length-1
            changeBullets(showIndex)
            sliderLenta.css('left', -100 * (showIndex+1) + "%")
            sliderLenta.removeClass("animated")
        })
        // bullets
    } else{
        showIndex--
        sliderLenta.animate({
            left: -100 * (showIndex+1)+"%"

        },1500, function(){
            sliderLenta.removeClass("animated")
            changeBullets(showIndex)
        })
    }
})

slider.find('.slider-arrow-right i').click(function slideRight(){
    sliderLenta.addClass('animated')

    if(showIndex >= sliderItems.length - 1){
        showIndex++
        sliderLenta.animate({
            left: -100 * (showIndex+1)+"%"
        },1500, function(){
            showIndex = 0
            sliderLenta.css('left', -100 * (showIndex+1) + "%")
            sliderLenta.removeClass('animated')
            changeBullets(showIndex)
        })
        if(sliderLenta.hasClass("animated")){
            return
        }
    } else{
        showIndex++
        sliderLenta.animate({
            left: -100 * (showIndex+1)+"%"
        },1500, function(){
            sliderLenta.removeClass('animated')
            changeBullets(showIndex)
        })
        if(sliderLenta.hasClass("animated")){
            return
        }
    }
})

function changeBullets(index) {
    for (let i = 0; i < sliderBullets.length; i++) {
        sliderBullets[i].style.backgroundColor = 'rgba(255, 255, 255, 0'
    }
    sliderBullets[index].style.backgroundColor = 'white'
}

document.addEventListener("keypress", (event) => {

    if(event.code == "ArrowLeft"){
        slideLeft()
    }
    else if(event.code == "ArrowRight"){
        slideRight()
    }
})

    for (let i = 0; i < sliderBullets.length; i++) {
        sliderBullets[i].onclick = function(){
            console.log(this.id)
            showIndex = this.id
            showIndex++
            console.log(showIndex)
            sliderLenta.animate({
                left: -100 * (showIndex)+"%"
            },1500, function(){
                sliderLenta.removeClass('animated')
                changeBullets(showIndex)
            })
            if(sliderLenta.hasClass("animated")){
                return
            }
            showIndex--
        }    
    }
