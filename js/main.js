var heart = document.getElementsByClassName('home-product-item__like')
console.log(heart)

for(var i in heart) {
    heart[i].onclick = function() {
        heart[i].classList.toggle('home-product-item__like--liked')
        console.log("click")
    }
    // heart[i].classList.toggle('home-product-item__like--liked')
    
}

var heart2 = document.querySelector('.pagination-item--active')

console.log(heart2)
heart2.onclick = function() {
    console.log("abc")
}
