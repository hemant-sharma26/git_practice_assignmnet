// prime or Not
let num = 13
  let flag = false;
    for (i=2;i<num;i++){
        if(num%i==0)
            flag=true
    }if(flag)
        console.log("No")
else
    console.log("Yes")