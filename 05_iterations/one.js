//for

for (let i = 0; i < 10; i++) {
    const element = i
    if(element == 5)
    {
        //console.log("5 is best number");
    }
    //console.log(element);
}

for (let i = 1; i < 10; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 1; j < 10; j++) {
      //  console.log(`inner loop value ${j} and inner loop ${i} `);
        console.log(i + ' * ' + j + ' = '  +i*j);
        
    }

    
}


let myarray = ["flash" , "superman" , "batman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}

//break and continue

// for (let index = 0; index < 20 ; index++) {
//      if(index == 5)
//      {
//         console.log("5 detected");
//         break;
//      }
//      console.log(`value of i ${index}`);
    
// }



for (let index = 0; index < 20 ; index++) {
     if(index == 5)
     {
        console.log("5 detected");  // 5 will not get printed
        continue
     }
     console.log(`value of i ${index}`);
    
}