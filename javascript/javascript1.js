const bodPa=document.querySelector('body')
const randomClickFunction= function (){
    const colors=["red","yellow","green","light-green","light-blue","navy"];
    const randomIndex=Math.floor(Math.random * colors.length);
    const randomColor=colors[randomIndex];
    bodPa.style.backgroundColor=randomColor;
    console.log('user clicked and set the color to'+randomColor);

}
// randomClickFunction()
bodPa.onclick=randomClickFunction;