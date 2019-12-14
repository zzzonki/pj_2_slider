let slider = $(".slider")
let sliderLenta = slider.find(".slider-lenta")
let sliderItems = slider.find(".slider-lenta-item.real")
sliderLenta.css('width', (sliderItems.length+2) * 100 + "%")
let sliderBullets = slider.find('.slider-bullets div')
let arrowLeft = slider.find('.slider-arrow-left i')
let arrowRight = slider.find('.slider-arrow-right i')

// MVC
// Model
let showIndex = 0

changeBullets(showIndex)

$(document).keydown(function(e) {

    if(e.keyCode == 37){
        arrowLeft.click()
        // changeBullets(showIndex)
        // return
    }
    else if(e.keyCode == 39){
        console.log(showIndex)
        if(showIndex >= showIndex.length - 1){
            showIndex = 0
            arrowRight.click()
        } else{
            arrowRight.click()
        }
        // changeBullets(showIndex)
        // return
    }
    else if(e.keyCode == 49){
        sliderBullets[0].click()
    }
    else if(e.keyCode == 50){
        sliderBullets[1].click()
    }
    else if(e.keyCode == 51){
        sliderBullets[2].click()
    }
    else if(e.keyCode == 52){
        sliderBullets[3].click()
    }
    else if(e.keyCode == 53){
        sliderBullets[4].click()
    }
})

arrowLeft.click(function slideLeft() {
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

arrowRight.click(function slideRight() {
    // Все заработало, после добавления следующих трех строчек
    if(sliderLenta.hasClass("animated")){
        return
    }
    
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
        // if(sliderLenta.hasClass("animated")){
        //     return
        // }
    } else{
        showIndex++
        sliderLenta.animate({
            left: -100 * (showIndex+1)+"%"
        },1500, function(){
            sliderLenta.removeClass('animated')
            changeBullets(showIndex)
        })
        // if(sliderLenta.hasClass("animated")){
        //     return
        // }
    }
})

function changeBullets(index) {
    for (let i = 0; i < sliderBullets.length; i++) {
        sliderBullets[i].style.backgroundColor = 'rgba(255, 255, 255, 0'
    }
    sliderBullets[index].style.backgroundColor = 'white'
}


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

