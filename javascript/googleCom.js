const bodyPar=document.querySelector('body');
undefined
const randomColorGenFun=function(){
  const colors=['red','green','navy','lightblue','golden'];
  const randomIndex=Math.floor(Math.random()* colors.length)
  const randomColor=colors[randomIndex];
  bodyPar.style.backgroundColor=randomColor;
  console.log('User clicked and color set to'+randomColor);
}
bodyPar.onclick=randomColorGenFun;