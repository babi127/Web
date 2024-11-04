function printLine(num){
    prints='';
    for(let i=1;i<=num;i++){
        prints+='* ';

    };
    return prints + ' \n';
};

function printTriangle(num){
   let triangleContainer='';// Variable that we gonna store the triangle
   let lineNum=1;// number of lines
    for(lineNum=1; lineNum<=num;lineNum++){
        triangleContainer=triangleContainer+ printLine(lineNum);// calls the previous function(with the number of lines parameter) that makes the line concatenated withe the new triangle container
    };
    return triangleContainer;// returns the string containing the triangle

};
console.log(printTriangle(5));
