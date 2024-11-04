// // counting to a certain number using while loop
let x=2;

while(x<=4000){
    console.log(x);
    x+=1;// After printing will increment x by 1 each time then compare it if it's still less than 4k
}

let i=1

while(i<=20){
    if(i%3===0){
        console.log('Julia');
    }
    else if(i%5===0){
        console.log('James');
    }else if((i%3 && i%5)===0){
        console.log('JuliaJames');
    }else{
        console.log(i);
    }
    
    i++; // the difference from this expression '++x' is that this one returns the increment the value right away and returns the incremented value rather than returning the original and increment it when asked again 
    };



    let y=99;
    while(y>=1){
        if(y!==1){
            console.log(y+' bottles of juice on the wall! '+y+' bottles of juice! Take one down, pass it around...'+ (y-1) +' bottles of juice on the wall!');

        }else{
            console.log(y+' bottle of juice on the wall! '+y+' bottle of juice! Take one down, pass it around...'+ (y-1) +' bottle of juice on the wall!');
        }
        y--;
    };

   let t=60;
    while(t>=0){
        // console.log(t);
        if(t===50){
            console.log('Orbiter transfers from ground to internal power (T-50 seconds)');
        }else if(t===31){
            console.log('Ground launch sequencer is go for auto sequence start (T-31 seconds)');
        }else if(t===16){
            console.log('Activate launch pad sound suppression system (T-16 seconds)');
        }else if(t===10){
            console.log('Activate main engine hydrogen burnOff system (T-10 seconds)');
        }else if(t===6){
            console.log('Main engine start (T-6 seconds)');
        }else if(t===0){
            console.log('Solid rocket booster ignition and liftoff! (T-0 seconds)');
        }else{
            console.log(t + ' -' +' x seconds');
        }
        t--;
    };
