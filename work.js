function firstLetterName(name){
    alert('The name '+name+' starts with the letter '+name[0]);
}


function divisibleByTwo (number){
    if(number % 2 == 0) {
        console.log("True");
    }
    
    else {
        console.log("False");
    }
}


function largestNum(arr){
    const max = Math.max(...arr);
    console.log (max);
  }
 
  divisibleByTwo(3);
  firstLetterName('Frank');
  var arr = [1,2,3,4,4,90];
  largestNum(arr);