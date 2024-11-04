let isActive=true;
let checkBalance=true;
let balance=44;

if(checkBalance&&isActive){
    if(isActive&& balance>0){
        console.log("Your balance is $"+balance.toFixed(2));// the toFixed() function helps us to print the balance to specified decimal points!
    }else if(!isActive){
        console.log("Account is no longer active!");

    }else if(balance===0){
        console.log("Your account is empty!");
    }else{
        console.log("Your balance is negative. Pleas contact bank!!");
    }

}else{
    console.log("Thank you! Have a nice day!")// using flowchart for such kind of questions is very important in finding the best algorithm i.e best ay to solve the question!
}