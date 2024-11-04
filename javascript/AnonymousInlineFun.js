// const myFavoriteMovie=function favMovie(movieName){
//     console.log('My favorite movie is' + movieName);
// };


// function movies(msgFunc, name){
//    msgFunc(name);
// };
// movies(myFavoriteMovie,' Thor');

//The above is one way of doing it, but there is another way of doing this

// Called inline function expression
// just not reuseable , but handy when needed


// Anonymous Inline Function Expressions
function movies(msgFunc, name){
        msgFunc(name);
    };

movies(function myFavMovie(movieName){
    console.log('My favorite Movie is ' + movieName);

}, 'Finding nemooooo');// But it's not reusable as the normal function expression



const laugh=function(max){
    let laughing='';
    for(let i=0; i<=max;i++){
        laughing+='ha';
    }
    return laughing + '!';
    
};

console.log(laugh(3));// Can call the function via th variable that it's assigned to !
