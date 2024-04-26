let img = document.querySelector(".img-main");
let imgZero = document.querySelector("#img");
let imgOne = document.querySelector("#img1");
let imgTwo = document.querySelector("#img2");
let imgThree = document.querySelector("#img3");
let imgFour = document.querySelector("#img4");
let body = document.body;
function phones(phone){
    img.src = phone;
}
function colors(color){
    body.style.backgroundColor = color;
}
imgZero.addEventListener("click",()=> { phones(imgZero.src); colors("black") }) 
imgOne.addEventListener("click",()=> { phones(imgOne.src); colors("cadetblue") }) 
imgTwo.addEventListener("click",()=> { phones(imgTwo.src); colors("gray") }) 
imgThree.addEventListener("click",()=> { phones(imgThree.src); colors("darksalmon") }) 
imgFour.addEventListener("click",()=> { phones(imgFour.src); colors("brown")}) 