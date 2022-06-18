// const card = document.querySelectorAll('.feature__mugs1');
// const btn1 = document.querySelector('.feature__mugs1-btn1');
// const btn2 = document.querySelector('.feature__mugs1-btn2');

// for (let i = 0; i < card.length; i++) {
//    card[i].addEventListener('mouseover', function() {
//     btn1.style = `
//     display: flex;
//     transform: translate(1em, -11em);
    
//     `
//     btn2.style = `
//     display: flex;
//     transform: translate(1em, -11em);
//     transition-duration: 1s;
//     `
//     card[i].addEventListener('mouseout', function(){
//         btn1.style = `
//     display: none;`
//     btn2.style = `
//     display: none;`
//     })
// }) 
// };


// console.log( typeof card);
// console.log(btn1);
// console.log(btn2);

let buttonInBtn = document.querySelectorAll('.feature__mugs1__link-btn');
let box = document.querySelectorAll('.box');
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('mouseover', () => {
    buttonInBtn[i].classList.add('transform-up');
  })
  box[i].addEventListener('mouseout', () => {
    buttonInBtn[i].classList.remove('transform-up');
  })
}


let btnProducts = document.querySelectorAll('.products__cards-card__link-btn');
let productCards = document.querySelectorAll('.products__cards-card');

for (let j = 0; j < productCards.length; j++) {
    productCards[j].addEventListener('mouseover', () => {
      btnProducts[j].classList.add('products__cards-card__link-btn-up');
    })
    productCards[j].addEventListener('mouseout', () => {
      btnProducts[j].classList.remove('products__cards-card__link-btn-up');
    })
}

let mugs = document.querySelector('.feature__mugs');
console.log(mugs);
window.addEventListener('scroll', function(){
  if(pageYOffset > 800){
  mugs.style = `
                animation-name: mugs-up;
                animation-duration: 4s;`
}
})
